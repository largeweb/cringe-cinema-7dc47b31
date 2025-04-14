// app/components/CringeOMeter.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  rating: number; // Out of 10
}

const CringeOMeter: React.FC<Props> = ({ rating }) => {
  // Ensure rating is within the valid range (0-10)
  const validRating = Math.max(0, Math.min(rating, 10));

  // Calculate the width of the meter bar as a percentage
  const meterWidth = (validRating / 10) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${meterWidth}%`,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-200 rounded-full h-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-blue-500 h-4 rounded-full absolute top-0 left-0"
        style={{ width: 0 }} // Initial width is set here, but animated by barVariants
        variants={barVariants}
      ></motion.div>
    </div>
  );
};

export default CringeOMeter;