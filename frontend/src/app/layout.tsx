import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RootBuilders Talent Engagement Dashboard",
  description:
    "A centralized dashboard for tracking participant engagement, attendance, task submissions, and inactivity across RootBuilders cohorts.",
  icons: {
    icon: "/df_favicon.png",
    shortcut: "/Delayfree_icon.png",
    apple: "/Delayfree_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
