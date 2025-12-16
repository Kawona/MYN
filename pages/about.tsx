"use client";

import AboutIntro from "@/components/aboutPage/AboutIntro";
import AreasOfFocus from "@/components/aboutPage/AreasOfFocus";
import TeamLeaders from "@/components/aboutPage/TeamLeaders";
import MissionVision from "@/components/aboutPage/MissionVision";

export default function AboutPage() {
    return (
        <main className="flex flex-col">
      {/* Hero Banner (50vh) */}
      <section
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/MissionVision/About.jpeg')" }}
      >
        <div className="w-full h-full bg-black/35 flex items-center justify-center">
        </div>
      </section>

        {/* About intro */}
        <AboutIntro />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Areas of Focus */}
        <AreasOfFocus />

        {/* Team leaders */}
        <TeamLeaders />
    </main>
    )
}