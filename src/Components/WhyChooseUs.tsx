import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Expert Faculty",
      description:
        "Our music school boasts a team of highly skilled and experienced faculty members who are dedicated to nurturing talent and imparting comprehensive musical education.",
    },
    {
      title: "Diverse Curriculum",
      description:
        "We offer a diverse range of courses covering various musical genres, styles, and instruments, allowing students to explore their interests and broaden their musical horizons.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Our school is equipped with modern facilities, including well-equipped practice rooms, recording studios, and performance spaces, providing students with an optimal learning environment.",
    },
    {
      title: "Individualized Instruction",
      description:
        "We prioritize personalized attention, offering one-on-one lessons and small class sizes to ensure that each student receives tailored instruction and guidance according to their unique learning needs and goals.",
    },
    {
      title: "Performance Opportunities",
      description:
        "We provide numerous opportunities for students to showcase their talent through recitals, concerts, competitions, and community events, helping them gain confidence and valuable performance experience.",
    },
    {
      title: "Collaborative Environment",
      description:
        "Our school fosters a collaborative and supportive atmosphere where students can engage with peers, collaborate on projects, and participate in ensemble performances, fostering teamwork and camaraderie.",
    },
    {
      title: "Comprehensive Music Theory",
      description:
        "In addition to practical training, our curriculum includes a strong emphasis on music theory, ensuring that students develop a deep understanding of the fundamental principles of music.",
    },
    {
      title: "Career Development",
      description:
        "We offer resources and support for students interested in pursuing careers in music, including guidance on audition preparation, networking opportunities, and industry insights to help them navigate their professional paths successfully.",
    },
    {
      title: "Community Engagement",
      description:
        "Our school actively engages with the local community through outreach programs, partnerships with schools and organizations, and volunteering opportunities, demonstrating our commitment to making a positive impact through music.",
    },
    {
      title: "Alumni Success",
      description:
        "Many of our alumni have gone on to achieve success in the music industry, whether as performers, educators, composers, or industry professionals, highlighting the quality of education and training provided by our school.",
    },
  ];
  return (
    <div>
      <StickyScroll content={points} />
    </div>
  );
}
