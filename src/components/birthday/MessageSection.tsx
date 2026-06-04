import { motion } from "framer-motion";
import { FloatingHearts } from "./Backgrounds";

const lines = [
  "On your special day, I just want you to know how much you mean to me.",
  "You are the kind of friend everyone wishes for — kind, funny, fiercely loyal, and endlessly caring.",
  "Thank you for every laugh, every late-night talk, and every memory we've made together.",
  "May this year bring you all the love, joy, and magic you so freely give to everyone around you.",
  "Happy Birthday, my behan, dost , jannnn . Here's to many more adventures together Ameennn. 💖",
  "P.S. I hope you like the surprise! 🎉",
];

export function MessageSection() {
  return (
    <section className="bday-gradient relative overflow-hidden px-6 py-28">
      <FloatingHearts count={12} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glow-card rounded-3xl p-8 text-center sm:p-12"
        >
          <h2 className="font-display text-glow-pink mb-10 text-5xl text-white sm:text-6xl">
            A Note For You
          </h2>
          <div className="space-y-6">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.5 }}
                className="text-lg leading-relaxed text-pink-100/90 sm:text-xl"
              >
                {line}
              </motion.p>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="font-display text-glow-pink mt-12 text-4xl text-bday-glow"
          >
            With all my love, To Zarishh Abbasi ❤️
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
