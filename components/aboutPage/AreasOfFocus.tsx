import React, { FC } from "react";

const AreasOfFocus: FC = () => {
  const focusAreas = [
    {
      title: "Youth Leadership & Mentorship",
      desc: "Programs that develop leadership capabilities, mentorship networks, and youth-led initiatives.",
    },
    {
      title: "Education & Career Development",
      desc: "Skills training, tutoring, and career support designed to help young people succeed academically and professionally.",
    },
    {
      title: "Entrepreneurship & Innovation",
      desc: "Supporting young entrepreneurs with training, incubation, mentorship, and access to essential growth networks.",
    },
    {
      title: "Community Empowerment & Advocacy",
      desc: "Mobilizing youth for civic participation, community improvement projects, and impactful advocacy initiatives.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#0B3D91] mb-12">
          <span className="border-l-8 border-[#FFCC00] pl-4">
            Areas of Focus
          </span>
        </h3>

        {/* GRID OF FOCUS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {focusAreas.map((item, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-2xl shadow-md border border-gray-100 
                hover:shadow-xl transition-all duration-300
              "
            >
              <h4 className="text-xl font-semibold text-[#0B3D91] mb-3">
                {item.title}
              </h4>

              <p className="text-gray-700 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
