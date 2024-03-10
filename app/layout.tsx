import Navbar from "@/components/layouts/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/layouts/footer";
import Head from "next/head";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default:
      "Deep roots - Event Management Company in Chandigarh, Wedding Planner, Branding Agency",
    template:
      "%s | Deep roots - Event Management Company in Chandigarh, Wedding Planner, Branding Agency",
  },
  description:
    "Welcome to Deep roots, your premier Event Manager in Chandigarh! As a leading Wedding Planner and Branding Agency, we specialize in crafting unforgettable experiences that go beyond expectations. Our expert team is dedicated to seamlessly coordinating and executing events that leave a lasting impression. From enchanting weddings to corporate events and dynamic brand campaigns, Deeproots ensures every detail is meticulously curated. Explore the art of exceptional event management and elevate your celebrations with Deeproots - where every occasion is transformed into a masterpiece.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
