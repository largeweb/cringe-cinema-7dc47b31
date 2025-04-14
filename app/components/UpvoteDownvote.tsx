// app/components/UpvoteDownvote.tsx
"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  upvotes: number;
  downvotes: number;
  onUpvote: () => void; // Mock function
  onDownvote: () => void; // Mock function
}

const UpvoteDownvote: React.FC<Props> = ({ upvotes: initialUpvotes, downvotes: initialDownvotes, onUpvote, onDownvote }) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  const handleUpvote = useCallback(() => {
    setUpvotes(prev => prev + 1);
    onUpvote?.();
  }, [onUpvote]);

  const handleDownvote = useCallback(() => {
    setDownvotes(prev => prev + 1);
    onDownvote?.();
  }, [onDownvote]);

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleUpvote}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
      >
        <Image src="/upvote.svg" alt="Upvote" width={20} height={20} />
        <span>{upvotes}</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDownvote}
        className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
      >
        <Image src="/downvote.svg" alt="Downvote" width={20} height={20} />
        <span>{downvotes}</span>
      </motion.button>
    </div>
  );
};

export default UpvoteDownvote;