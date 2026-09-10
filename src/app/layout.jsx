import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import FooterSection from "@/Components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AURA-SYNC",
  description:
    "AURA-SYNC is a cutting-edge, open-source, multi-cloud data synchronization platform that enables seamless data transfer and synchronization across various cloud providers, including AWS S3, Cloudflare R2, Google Cloud Storage, and Azure Blob. With its low-latency engine and robust architecture, AURA-SYNC ensures efficient and reliable data management for businesses of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      suppresshydrationwarning="true"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
