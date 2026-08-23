import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./auth-context";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://cpp-learning-park.malevge1985.chatgpt.site"),
  title: "Code Knowledge Park | C++ and Python",
  description: "Learn C++ and Python through 120 practical coding exercises, detailed beginner explanations and instant feedback in five languages.",
  openGraph: {
    title: "Code Knowledge Park | C++ and Python",
    description: "Learn C++ and Python by writing code through 120 practical exercises in five languages.",
    type: "website",
    images: [{ url: "/portal-hero.jpg", width: 1200, height: 630, alt: "Code Knowledge Park with C++ and Python learning routes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Knowledge Park | C++ and Python",
    description: "Learn C++ and Python by writing code through 120 practical exercises in five languages.",
    images: ["/portal-hero.jpg"],
  },
  icons: { icon: `${publicBasePath}/favicon.svg`, shortcut: `${publicBasePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><AuthProvider>{children}</AuthProvider></body></html>;
}
