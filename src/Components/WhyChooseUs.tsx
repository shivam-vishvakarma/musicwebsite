import { StickyScroll } from "./ui/sticky-scroll-reveal";
import data from "@/Data/music_courses.json";

export default function WhyChooseUs() {
  const points = data["why choose points"];
  return (
    <div>
      <StickyScroll content={points} />
    </div>
  );
}
