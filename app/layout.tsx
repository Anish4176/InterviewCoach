import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterviewCoach - AI Mock Interviews & Feedback",
  description: "AI-powered mock interviews and feedback platform for college students to enhance their interview skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable} pattern`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
