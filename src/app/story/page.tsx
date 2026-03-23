import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoryPageContent from "./story-content";

export const metadata: Metadata = {
  title: "Our Story  -  T & S Wedding",
  description:
    "Mumbai, Pune, London  -  different cities, one love story. The journey of Tarush & Sanjana.",
};

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <StoryPageContent />
      <Footer />
    </>
  );
}
