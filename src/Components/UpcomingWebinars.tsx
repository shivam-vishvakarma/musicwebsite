"use client";
import Link from "next/link";
import data from "@/Data/music_courses.json";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars() {
  const webinars = data.featuredWebinars;
  return (
    <section className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={webinars.map((webi) => ({
              title: webi.title,
              description: webi.description,
              link: `/webinars/${webi.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </section>
  );
}
