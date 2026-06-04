import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { Stars, FloatingHearts, Balloons, Confetti } from "./Backgrounds";
import { MemoriesGallery } from "./MemoriesGallery";
import { MessageSection } from "./MessageSection";
import Image from "@/assets/zarlish1.jpeg";
export function BirthdayScreen() {
  const [showMemories, setShowMemories] = useState(false);

  const scrollToGallery = () => {
    setShowMemories(true);
    setTimeout(() => {
      document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <motion.div
      key="birthday"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <img
          src={Image}
          alt="My best friend celebrating"
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm"
          width={1080}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-fuchsia-950/70 to-black/90" />

        <Stars count={70} />
        <Confetti count={50} />
        <Balloons count={12} />
        <FloatingHearts count={16} />

        <motion.button
          onClick={scrollToGallery}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="glass glow-btn absolute right-4 top-4 z-30 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white sm:right-8 sm:top-8"
        >
          <FaWandMagicSparkles className="text-bday-glow" />
          Memories
        </motion.button>

        <div className="relative z-20 text-center">
          <motion.h1
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.4 }}
            className="font-display text-glow-pink text-6xl leading-tight text-white sm:text-8xl md:text-9xl"
          >
            Happy Birthdayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-2xl tracking-wide text-pink-100 sm:text-3xl"
          >
            🎉 To my Rass Malaiiiiii 🎉
          </motion.p>
          <motion.button
            onClick={scrollToGallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            className="mt-10 rounded-full border border-pink-300/40 px-7 py-3 text-sm font-medium text-pink-100 transition-colors hover:bg-pink-500/20"
          >
            han ao tmhain kuch dikhati hon ✨
          </motion.button>
        </div>
      </section>

      <AnimatePresence>{showMemories && <MemoriesGallery />}</AnimatePresence>

      <MessageSection />
    </motion.div>
  );
}
