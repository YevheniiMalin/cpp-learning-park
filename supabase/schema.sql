begin;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  role text not null default 'student' check (role in ('student', 'admin')),
  sync_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course text not null check (course in ('cpp', 'python')),
  completed jsonb not null default '[]'::jsonb,
  codes jsonb not null default '[]'::jsonb,
  active_station integer not null default 0 check (active_station between 0 and 5),
  active_task integer not null default 0 check (active_task between 0 and 9),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, course)
);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    coalesce(new.email, ''),
    nullif(new.raw_user_meta_data ->> 'display_name', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace function public.current_user_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create or replace function public.current_user_can_sync()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and sync_enabled = true
  );
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.touch_updated_at();

drop trigger if exists course_progress_touch_updated_at on public.course_progress;
create trigger course_progress_touch_updated_at
before update on public.course_progress
for each row execute function public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.course_progress enable row level security;

drop policy if exists "Read own profile or administer profiles" on public.profiles;
create policy "Read own profile or administer profiles"
on public.profiles for select
to authenticated
using (id = auth.uid() or public.current_user_is_admin());

drop policy if exists "Administrators update profiles" on public.profiles;
create policy "Administrators update profiles"
on public.profiles for update
to authenticated
using (public.current_user_is_admin())
with check (public.current_user_is_admin());

drop policy if exists "Students read synchronized progress" on public.course_progress;
create policy "Students read synchronized progress"
on public.course_progress for select
to authenticated
using (
  (user_id = auth.uid() and public.current_user_can_sync())
  or public.current_user_is_admin()
);

drop policy if exists "Students create synchronized progress" on public.course_progress;
create policy "Students create synchronized progress"
on public.course_progress for insert
to authenticated
with check (
  (user_id = auth.uid() and public.current_user_can_sync())
  or public.current_user_is_admin()
);

drop policy if exists "Students update synchronized progress" on public.course_progress;
create policy "Students update synchronized progress"
on public.course_progress for update
to authenticated
using (
  (user_id = auth.uid() and public.current_user_can_sync())
  or public.current_user_is_admin()
)
with check (
  (user_id = auth.uid() and public.current_user_can_sync())
  or public.current_user_is_admin()
);

drop policy if exists "Students delete synchronized progress" on public.course_progress;
create policy "Students delete synchronized progress"
on public.course_progress for delete
to authenticated
using (
  (user_id = auth.uid() and public.current_user_can_sync())
  or public.current_user_is_admin()
);

revoke all on public.profiles from anon;
revoke all on public.course_progress from anon;

grant select on public.profiles to authenticated;
grant update (display_name, role, sync_enabled) on public.profiles to authenticated;
grant select, insert, update, delete on public.course_progress to authenticated;

revoke all on function public.current_user_is_admin() from public;
revoke all on function public.current_user_can_sync() from public;
revoke all on function public.handle_new_user() from public;
revoke all on function public.touch_updated_at() from public;

grant execute on function public.current_user_is_admin() to authenticated;
grant execute on function public.current_user_can_sync() to authenticated;

commit;
