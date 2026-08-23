# Code Knowledge Park

[![Live App](https://img.shields.io/badge/LIVE_APP-open-ff5b45)](https://cpp-learning-park.malevge1985.chatgpt.site)
[![GitHub Pages](https://img.shields.io/badge/GITHUB_PAGES-open-2ea44f)](https://yevheniimalin.github.io/cpp-learning-park/)
[![Exercises](https://img.shields.io/badge/EXERCISES-120-6246ea)](#courses)
[![Courses](https://img.shields.io/badge/COURSES-C%2B%2B_%7C_PYTHON-3279b7)](#courses)
[![Languages](https://img.shields.io/badge/LANGUAGES-5-f59e0b)](#languages)
[![License](https://img.shields.io/badge/LICENSE-MIT-0891b2)](LICENSE)

An interactive browser game for learning C++ and Python through detailed beginner explanations, deliberate repetition and practical coding exercises with instant feedback.

![Code Knowledge Park](public/portal-hero.jpg)

## Features

- 120 practical exercises across 12 topics
- C++ and Python learning routes
- detailed explanations before every task
- an in-browser editor with specific diagnostics and visible program output
- Russian, English, Ukrainian, Finnish and Thai interface languages
- guest mode with progress stored locally in the browser
- optional Supabase account sign-in and progress synchronization across devices
- administrator panel for manually creating student accounts, enabling access and viewing progress
- individual course and topic progress reset with confirmation

## Courses

Each course contains 6 topics with 10 exercises per topic.

| C++ | Python |
| --- | --- |
| Output and `main` | Output and basic syntax |
| Types and variables | Variables and data types |
| Loops and logic | Conditions and loops |
| Functions | Functions |
| References and memory | Collections |
| Classes and objects | Classes and objects |

## Languages

English is selected by default. The complete interface and course material are also available in Russian, Ukrainian, Finnish and Thai.

## Running locally

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The Supabase project URL and publishable browser key are stored in `app/lib/supabase.ts`. The publishable key is intentionally public and protected by Row Level Security. Never put a Supabase `service_role` key in browser code or commit it to GitHub.

To create the database tables, policies and helper functions, run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL Editor. After creating your own account, promote it manually:

```sql
update public.profiles
set role = 'admin', sync_enabled = true
where email = 'your-email@example.com';
```

For confirmation emails, configure Supabase Authentication URL settings as follows:

- Site URL: `https://yevheniimalin.github.io/cpp-learning-park/`
- Redirect URL: `https://yevheniimalin.github.io/cpp-learning-park/account/`
- Additional redirect URL: `https://cpp-learning-park.malevge1985.chatgpt.site/account/`

The app supplies the correct confirmation return address for the deployment where the administrator creates the student account.

## Builds and deployment

- `npm run build` creates the production build used by the hosted application.
- `npm run build:github` creates a static export under `out/` with the `/cpp-learning-park` base path.
- The canonical version with authentication is [the live application](https://cpp-learning-park.malevge1985.chatgpt.site).
- GitHub Pages serves the committed static export from the repository root.

## Progress and privacy

Guests can use every lesson without registration. Their progress remains in the current browser. Signed-in students whose synchronization has been enabled by an administrator can continue on another device. Each account can access only its own progress; administrators can view student completion totals and enable or disable synchronization.

## License

Released under the [MIT License](LICENSE).
