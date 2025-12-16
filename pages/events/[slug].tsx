import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { eventsData } from "../../data/eventsData";

interface EventDetailProps {
  event: {
    title: string;
    bannerImage: string;
    content: string[];
    images: string[];
  };
}

const EventDetailPage: NextPage<EventDetailProps> = ({ event }) => {
  if (!event) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#0B3D91]">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">

      {/* BANNER IMAGE */}
      <section className="relative w-full">
        <Image
          src={event.bannerImage}
          alt={event.title}
          width={1920}
          height={1080}
          priority
          className="w-full h-auto"
        />

        <div className="absolute inset-0  flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg text-center">
            {event.title}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D91] text-center">
            {event.title}
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            {event.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT IMAGES */}
      <section className="px-6 md:px-12 lg:px-24 py-16 space-y-12">
        {event.images.map((img, index) => (
          <div key={index} className="w-full">
            <Image
              src={img}
              alt={`${event.title} image ${index + 1}`}
              width={1600}
              height={1200}
              className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition duration-300"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(eventsData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const event = eventsData[slug] || null;

  return {
    props: {
      event,
    },
  };
};
