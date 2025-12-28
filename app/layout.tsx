import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andy Bello",
  description: "Andy Bello's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fredoka.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
