import { motion } from "framer-motion";
import m1 from "@/assets/picture1.jpeg";
import m2 from "@/assets/picture2.jpeg";
import m3 from "@/assets/picture7.jpeg";
import m4 from "@/assets/picture3.jpeg";
import m5 from "@/assets/picture4.jpeg";
import m6 from "@/assets/picture.jpeg";

const MEMORIES = [
  { src: m1, caption: "Laughing till it hurts" },
  { src: m2, caption: "Our cozy little escapes" },
  { src: m3, caption: "Chasing you or holding dupataa" },
  { src: m4, caption: "Celebrating you, always" },
  { src: m5, caption: "Through thick and thin" },
  { src: m6, caption: "never forgottennn" },
];

const directions = [
  { x: -60, y: 0 },
  { x: 0, y: 60 },
  { x: 60, y: 0 },
  { x: -60, y: 0 },
  { x: 0, y: 60 },
  { x: 60, y: 0 },
];

export function MemoriesGallery() {
  return (
    <motion.section
      id="memories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bday-gradient relative px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-glow-pink mb-16 text-center text-5xl text-white sm:text-7xl"
        >
          Our Memories ✨
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORIES.map((mem, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.85, x: directions[i].x, y: directions[i].y }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              whileHover={{ scale: 1.04 }}
              className="glass group relative overflow-hidden rounded-2xl transition-shadow duration-300 hover:glow-card"
            >
              <img
                src={mem.src}
                alt={mem.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-sm font-medium text-pink-100">
                {mem.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
