import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LandingScreen } from "@/components/birthday/LandingScreen";
import { BirthdayScreen } from "@/components/birthday/BirthdayScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Birthday Surprise ❤️" },
      {
        name: "description",
        content: "A magical, animated birthday surprise full of love, memories, and glowing wishes for my best friend.",
      },
      { property: "og:title", content: "A Birthday Surprise ❤️" },
      {
        property: "og:description",
        content: "A magical, animated birthday surprise for my best friend.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0410]">
      <AnimatePresence mode="wait">
        {opened ? (
          <BirthdayScreen key="birthday" />
        ) : (
          <LandingScreen key="landing" onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>
    </main>
  );
}
