import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Stars, FloatingHearts } from "./Backgrounds";

export function LandingScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      key="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="bday-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <Stars count={80} />
      <FloatingHearts count={14} />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="font-display mb-6 text-4xl text-bday-glow text-glow-pink sm:text-6xl">
          A little surprise for you
        </p>
        <p className="mb-12 text-sm font-light tracking-[0.3em] text-pink-200/70 uppercase">
          Tap the heart below
        </p>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" } }}
          className="glow-btn group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-10 py-5 text-lg font-semibold text-white"
        >
          <FaHeart className="text-pink-100 transition-transform group-hover:scale-125" />
          Click Here
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export { AnimatePresence };
