"use client";

import type { Variants } from "motion/react";
import { cubicBezier, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.18,
      },
    },
  };

  const line: Variants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: cubicBezier(0.16, 1, 0.3, 1),
        type: "tween",
      },
    },
  };

  const cta: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.16, 1, 0.3, 1),
        type: "tween",
      },
    },
  };

  const photo: Variants = {
    hidden: { opacity: 0, filter: "grayscale(1)" },
    show: {
      opacity: 1,
      filter: "grayscale(0)",
      transition: { duration: 3, ease: cubicBezier(0.16, 1, 0.3, 1) },
    },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:items-stretch">

    <div className="w-full md:w-[50%] flex flex-col md:px-12 md:py-8">

      <motion.div
        className="relative block md:hidden w-full aspect-[4/3] overflow-hidden"
        variants={photo}
        initial="hidden"
        animate={mobileImageLoaded ? "show" : "hidden"}
      >
        <Image
          src="/clark-narvas.jpg"
          alt="Clark Narvas"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          onLoadingComplete={() => setMobileImageLoaded(true)}
        />
      </motion.div>

      <motion.div
        className="max-w-xl w-full mx-auto md:my-auto px-7 py-8 md:p-0 mb-12  "
        variants={container}
        initial="hidden"
        animate="show"
      >





      <div className="mb-12 light:hidden">
      <svg width="40" height="40" viewBox="0 0 862 889" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M444.497 889H444.487C444.489 889 444.491 888.999 444.493 888.999C444.494 888.999 444.496 889 444.497 889ZM444.497 0C534.357 0.0459239 622.099 27.2947 696.177 78.1611C770.254 129.028 827.197 201.129 859.514 284.978L861.104 289.112H762.525V599.888H861.096L859.504 604.022C827.309 687.953 770.396 760.133 696.291 811.019C622.188 861.903 534.385 889.094 444.493 888.999C384.49 888.999 326.28 877.246 271.477 854.067C164.911 808.913 80.0837 724.085 34.9297 617.52C11.7509 562.719 1.99217e-05 504.507 0 444.5C0 384.493 11.7508 326.281 34.9297 271.479C80.0824 164.914 164.909 80.0851 271.474 34.9297C326.281 11.7539 384.493 0 444.497 0ZM269.65 737.323C283.105 745.37 297.169 752.526 311.765 758.711C353.802 776.492 398.462 785.507 444.497 785.507C506.977 785.525 568.26 768.375 621.655 735.93C623.178 735.005 624.691 734.066 626.197 733.118L269.65 274.783V737.323ZM162.848 252.202C150.138 270.797 139.209 290.73 130.295 311.768C112.508 353.799 103.492 398.465 103.492 444.5C103.492 490.535 112.508 535.195 130.289 577.235C139.204 598.275 150.136 618.21 162.848 636.806V252.202ZM444.506 103.495C398.471 103.495 353.811 112.511 311.773 130.292C306.974 132.326 302.232 134.465 297.55 136.705L655.723 597.129V176.617C644.909 168.09 633.553 160.198 621.707 153C568.302 120.549 506.997 103.422 444.506 103.495Z" fill="#FD4107"/>
      </svg>
      </div>


      <motion.p className="text-base md:text-xl tracking-tight mb-4 md:mb-6" variants={line}>
        One day when I was 7 years old, I googled “how do I make a video game?”
      </motion.p>

      <motion.p className="text-base md:text-xl tracking-tight mb-4 md:mb-6" variants={line}>
        That curiosity pulled me into a small online game community that would later explode in popularity. I spent years creating things for it: designing, coding, editing videos, and connecting with people all over the world.
      </motion.p>

      <motion.p className="text-base md:text-xl tracking-tight mb-4 md:mb-6" variants={line}>
        Without realising it, I accidentally taught myself the foundations of everything I do today.
      </motion.p>

      <motion.p className="text-base md:text-xl tracking-tight mb-4 md:mb-6" variants={line}>
        Fast forward: I run{" "}
        <a href="https://studiodana.com" className="underline decoration-2 underline-offset-4 hover:text-[#FD4107]" target="_blank" rel="noreferrer">
          StudioDana
        </a>, where I help small and medium sized enterprises with their video, design and web presence. My work has brought me into organisations like the{" "}
        <a href="https://www.parliament.uk" className="underline decoration-2 underline-offset-4 hover:text-[#FD4107]" target="_blank" rel="noreferrer">
          UK Parliament
        </a>{" "}
        and the{" "}
        <a href="https://labour.org.uk" className="underline decoration-2 underline-offset-4 hover:text-[#FD4107]" target="_blank" rel="noreferrer">
          Labour Party
        </a>.
      </motion.p>

      <motion.p className="text-base md:text-xl tracking-tight mb-4 md:mb-6" variants={line}>
        But ultimately, the core hasn’t changed. I still love creating things that make people stop, look, and connect.
      </motion.p>

      <motion.p variants={line} className="text-3xl font-serif">Clark <i>Narvas</i></motion.p>

      </motion.div>

      <motion.a
        href="mailto:clark@narvas.co.uk"
        className="fixed bottom-0 left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 md:bottom-12 z-50 inline-block px-5 py-3 text-center hover:bg-[#9ADAC4]/80 backdrop-blur-md text-white text-lg font-semibold  bg-[#FD4107] transition-colors"
        variants={cta}
        initial="hidden"
        animate="show"
        transition={{ delay: 3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Tell me a joke
      </motion.a>
    </div>

    <div className="hidden md:block md:w-[50%] md:h-screen px-4 pb-8 md:p-5 md:sticky md:top-0 md:self-start">
      <motion.div
        className="relative w-full h-full min-h-[320px] md:min-h-[500px]"
        variants={photo}
        initial="hidden"
        animate={desktopImageLoaded ? "show" : "hidden"}
      >
        <Image
        src="/clark-narvas.png"
        alt="Clark Narvas"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        onLoadingComplete={() => setDesktopImageLoaded(true)}
        />
      </motion.div>
    </div>
    </div>

  );
}
