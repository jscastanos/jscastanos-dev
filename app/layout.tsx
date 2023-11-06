import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLayout from "./components/AppLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jec Castanos - Frontend Engineer",
  description:
    "Hi, I’m Jec Castanos. I am a frontend engineer from the Philippines with over 5 years of experience in web and software development. I am passionate about building user-friendly and visually appealing web applications. I am also an expert in performance optimization and code quality. In my spare time, I enjoy learning new technologies, playing video games, and spending time with my family and friends. I am always looking for new opportunities to challenge myself and grow as an engineer. If you are looking for a frontend engineer with a proven track record of success, I would love to hear from you.",
  authors: [
    {
      url: "https://github.com/jscastanos",
      name: "Jec Castanos",
    },
  ],
  icons: [
    {
      url: "https://www.jscastanos.dev/day-owl.svg",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://www.jscastanos.dev/day-owl.svg",
        alt: "Jec Castanos - Day Owl",
      },
      {
        url: "https://www.jscastanos.dev/night-owl.svg",
        alt: "Jec Castanos - Night Owl",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
