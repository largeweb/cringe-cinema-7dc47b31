// app/components/MovieListing.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import UpvoteDownvote from "./UpvoteDownvote";
import Comment from "./Comment";
import CringeOMeter from "./CringeOMeter";

interface Movie {
  id: string;
  title: string;
  rating: number;
  upvotes: number;
  downvotes: number;
  thumbnail: string;
  comments: string[];
}

interface Props {
  movie: Movie;
}

const MovieListing: React.FC<Props> = ({ movie }) => {
  const [localUpvotes, setLocalUpvotes] = useState(movie.upvotes);
  const [localDownvotes, setLocalDownvotes] = useState(movie.downvotes);

  const handleUpvote = () => {
    setLocalUpvotes(localUpvotes + 1);
    console.log("Upvoted:", movie.id); // Mock event handling
  };

  const handleDownvote = () => {
    setLocalDownvotes(localDownvotes + 1);
    console.log("Downvoted:", movie.id); // Mock event handling
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md shadow-sm p-4 flex flex-col">
      {/* Thumbnail */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={movie.thumbnail || "/placeholder-thumbnail.png"}
          alt={movie.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{movie.title}</h2>

      {/* Cringe-O-Meter */}
      <CringeOMeter rating={movie.rating} />

      {/* Upvote/Downvote */}
      <UpvoteDownvote
        upvotes={localUpvotes}
        downvotes={localDownvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />

      {/* Comments */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Comments</h3>
        {movie.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default MovieListing;