"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const [isWaving, setIsWaving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Trigger initial wave animation
    setIsWaving(true);
    const timer = setTimeout(() => setIsWaving(false), 2000); // Stop waving after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  const waveVariants: Variants = {
    wave: {
      rotate: [0, 15, 0, 15, 0],
      transition: {
        duration: 1.5,
        repeat: isWaving ? 1 : isHovering ? Infinity : 0,
        repeatType: "loop",
        ease: [0.455, 0.03, 0.515, 0.955], // easeInOutQuad
      },
    },
  };

  const renderCharacter = (char: string, index: number) => {
    if (char === "👋") {
      return (
        <motion.span
          key={index}
          animate={isWaving || isHovering ? "wave" : ""}
          variants={waveVariants}
          style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
        >
          {char}
        </motion.span>
      );
    }
    return char;
  };

  if (animateByCharacter) {
    return (
      <div
        className="flex"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {renderCharacter(char, i)}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="flex"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            yoyo: Infinity,
            delay,
            ease: "easeOut",
          }}
          className={cn("inline-block", className)}
        >
          {characters.map((char, index) => renderCharacter(char, index))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
