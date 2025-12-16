import Image from "next/image";

export default function DonatePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-[#0B3D91] mb-12">
        Donate to Support Our Work
      </h1>

      <div className="space-y-10 text-lg">

        {/* MTN MoMo */}
        <div className="space-y-4">
          <p className="font-semibold text-xl">MTN Mobile Money</p>

          <Image
            src="/images/MTNlogo.jpg"
            alt="MTN Mobile Money Logo"
            className="mx-auto h-16 object-contain"
          />

          <p className="font-medium">054 389 8509</p>
          <p className="text-gray-700">Meridian Youth Network</p>
        </div>

        {/* Bank Transfer */}
        <div className="space-y-3 pt-6 border-t">
          <p className="font-semibold text-xl">Bank Transfer</p>

          <p>
            <span className="font-medium">Account Name:</span> Meridian Youth Network
          </p>
          <p>
            <span className="font-medium">Bank:</span> FirstBank Ghana
          </p>
          <p>
            <span className="font-medium">Account Number:</span> 0242090000949
          </p>
          <p>
            <span className="font-medium">Branch:</span> Tema Community 6
          </p>
        </div>

      </div>
    </section>
  );
}
