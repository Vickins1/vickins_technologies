import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { src: "/Macdee.png", alt: "Macdee", url: "https://macdeeentertainment.com" },
    { src: "/scr.png", alt: "SCR", url: "https://smartchoicerentalmanagement.com" },
    { src: "/Baggit.png", alt: "Baggit", url: "https://baggit-ashy.vercel.app/" },
    { src: "/2.png", alt: "Client 4", url: "https://leasecaptain.com" },
    { src: "/black.png", alt: "Client 5", url: "https://vickins-technologies.onrender.com" },
    { src: "/flexi.png", alt: "Flexi", url: "#" },
  ];

  // Duplicate 2x for continuous flow
  const extendedClients = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[var(--background)]">
          <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="clients"
      className="py-1 rounded-2xl shadow-xl relative overflow-hidden mx-4"
      style={{ background: 'linear-gradient(to bottom right, var(--background), var(--card-bg))' }}
    ></motion.section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--foreground)' }}>
          Our Clients
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // slower = smoother
            }}
            style={{ width: "200%" }}
          >
            {extendedClients.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / clients.length}%` }}
              >
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-16 sm:h-20 md:h-24 lg:h-28"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 10vw"
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}