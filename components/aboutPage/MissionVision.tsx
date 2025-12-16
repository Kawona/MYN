"use client";

import Image from "next/image";
import React, { FC } from "react";

const MissionVision: FC = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* MISSION BLOCK */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          
          {/* Image */}
          <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
            <Image
              src="/images/MissionVision/cleaning6.jpg"
              alt="Mission"
              width={900}
              height={650}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 p-10 md:p-12">
            <span className="text-sm uppercase tracking-widest text-[#FFCC00] font-semibold">
              Mission
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-[#0B3D91] leading-tight">
              Empowering Youth for a Brighter Tomorrow
            </h3>

            <p className="text-lg leading-relaxed text-gray-700">
              To empower the growth of youth in our communities through sustainable development,
              fostering inclusivity and inspiring positive change for a brighter shared future.
            </p>

            <a
              href="/events"
              className="mt-6 inline-block text-[#0B3D91] font-semibold border-b-2 border-[#FFCC00] hover:text-[#FFCC00] transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* VISION BLOCK (REVERSE LAYOUT) */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          
          {/* Image */}
          <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
            <Image
              src="/images/MissionVision/girlChild1.jpg"
              alt="Vision"
              width={900}
              height={650}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 p-10 md:p-12">
            <span className="text-sm uppercase tracking-widest text-[#FFCC00] font-semibold">
              Vision
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-[#0B3D91] leading-tight">
              Inspiring Global Change Through Youth Empowerment
            </h3>

            <p className="text-lg leading-relaxed text-gray-700">
              To build a society where young individuals are equipped, inspired, and connected to lead
              meaningful change — fostering communities rooted in empathy, innovation, and resilience.
            </p>

            <a
              href="/events"
              className="mt-6 inline-block text-[#0B3D91] font-semibold border-b-2 border-[#FFCC00] hover:text-[#FFCC00] transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
