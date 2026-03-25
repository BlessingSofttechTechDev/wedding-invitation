import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoryPageContent from "./story-content";

export const metadata: Metadata = {
  title: "Our Story  -  T & S Wedding",
  description:
    "Bombay meet-cute, Pune friendship, London love, Kritesh and two families, Cappadocia after graduation  -  Tarush & Sanjana's story to Udaipur.",
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
