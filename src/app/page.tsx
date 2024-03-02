import FeaturedCourses from "@/Components/FeaturedCourses";
import HeroSection from "@/Components/HeroSection";
import WhyChooseUs from "@/Components/WhyChooseUs";
import TestimonialCards from "@/Components/TestimonialCards";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import Instructors from "@/Components/instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
