import React, { FC } from "react";

const AboutIntro: FC = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3D91]">
          <span className="border-l-8 border-[#FFCC00] pl-4">
            About MYN
          </span>
        </h2>

        {/* First Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium tracking-wide">
          Meridian Youth Network (MYN) is a dynamic organization committed to empowering young people
          through sustainable development, inclusivity, and transformative change. We envision a
          community where every youth thrives—breaking barriers and unlocking their full potential.
        </p>

        {/* Second Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium tracking-wide">
          At MYN, we believe the future is shaped by the youth of today. Join us in building a community
          where young people lead with purpose, innovation, and optimism.
        </p>

      </div>
    </section>
  );
};

export default AboutIntro;
