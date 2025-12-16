import Image from "next/image";
import React from "react";
import { team } from "@/data/teamData";

interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamLeaders: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0B3D91]">
        <span className="border-l-8 border-[#FFCC00] pl-4">
          Meet Our Team Leaders
        </span>
      </h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {team.map((leader: TeamMember) => (
          <div
            key={leader.id}
            className="
              bg-[#0B3D91] text-white rounded-3xl shadow-lg 
              p-10 md:p-14 
              flex flex-col md:flex-row items-center gap-10
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
            "
          >
            {/* Text Section */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {leader.name}
              </h3>

              <p className="text-[#FFCC00] font-semibold mb-4 text-lg">
                {leader.role}
              </p>

              <div
                className="text-base md:text-lg leading-relaxed text-gray-100"
                dangerouslySetInnerHTML={{ __html: leader.bio }}
              />
            </div>

            {/* Image Section */}
            <div className="md:w-1/3 flex justify-center">
              <div
                className="
                  w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden 
                  shadow-xl transform transition-all duration-300 
                  hover:scale-105
                "
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={350}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamLeaders;
