import data from "@/Data/music_courses.json";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonial = data.musicSchoolTestimonials;
  return (
    <section className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] flex flex-col relative justify-center items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={testimonial}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
