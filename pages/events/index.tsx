import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const EventsPage: FC = () => {
  const events = [
    {
      title: "Cleanup Exercise — Tema Community 2 BBC",
      date: "March 2024",
      image: "/images/CleaningFigma/CleaningFigma9.jpg",
      slug: "cleanup-exercise-tema-community-2-bbc",
    },
    {
      title: "Girl Child Program",
      date: "August 2024",
      image: "/images/GirlChild/photo1.jpg",
      slug: "girl-child-program",
    },
    {
      title: "Cleaning Exercise — Phase 2",
      date: "November 2024",
      image: "/images/CleaningExercise2/Cleanup8.jpg",
      slug: "cleaning-exercise-phase-2",
    },
    {
      title: "Cleaning Exercise — Phase 3",
      date: "June 2025",
      image: "/images/CleaningExercise3/photo2.jpg",
      slug: "cleaning-exercise-phase-3",
    },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-24 py-20 bg-white">

      {/* TITLE */}
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-[#0B3D91] mb-16">
        <span className="border-l-8 border-[#FFCC00] pl-4">Our Events</span>
      </h1>

      {/* EVENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {events.map((event, index) => (
          <Link
            key={index}
            href={`/events/${event.slug}`}
            className="
              block bg-white rounded-3xl shadow-md overflow-hidden 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              border border-gray-200
            "
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0B3D91] mb-1">
                {event.title}
              </h3>
              <p className="text-gray-600 font-medium">{event.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
