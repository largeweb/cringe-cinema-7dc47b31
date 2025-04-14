// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the movie object structure
interface Movie {
  id: string;
  title: string;
  rating: number;
  upvotes: number;
  downvotes: number;
  thumbnail: string;
  comments: string[];
}

// Mock movie data
const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Plan 9 from Outer Space",
    rating: 2.5,
    upvotes: 150,
    downvotes: 500,
    thumbnail: "/placeholder-thumbnail.png",
    comments: ["So bad it's good!", "Ed Wood's masterpiece... of cringe."],
  },
  {
    id: "2",
    title: "Troll 2",
    rating: 3.0,
    upvotes: 200,
    downvotes: 600,
    thumbnail: "/placeholder-thumbnail.png",
    comments: ["Oh my gooood!", "They're eating them! And then they're going to eat me!"]
  },
  {
    id: "3",
    title: "The Room",
    rating: 4.0,
    upvotes: 300,
    downvotes: 400,
    thumbnail: "/placeholder-thumbnail.png",
    comments: ["You're tearing me apart, Lisa!", "I did not hit her, it's not true! It's bullshit! I did not hit her! I did not!"]
  },
  {
    id: "4",
    title: "Manos: The Hands of Fate",
    rating: 1.5,
    upvotes: 50,
    downvotes: 700,
    thumbnail: "/placeholder-thumbnail.png",
    comments: ["This is... something.", "The master approves... of cringe."],
  },
  {
    id: "5",
    title: "Birdemic: Shock and Terror",
    rating: 2.0,
    upvotes: 100,
    downvotes: 650,
    thumbnail: "/placeholder-thumbnail.png",
    comments: ["Wire hangers!", "The birds... they're everywhere!"]
  },
];

// Placeholder component for MovieListing (replace with actual component later)
const MovieListing = ({ movie }: { movie: Movie }) => (
  <div className="border rounded-lg p-4">{movie.title}</div>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>(mockMovies);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Cringe Cinema</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a cringe classic..."
          className="w-full p-2 border rounded mb-6"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Movie Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredMovies.map((movie) => (
            <MovieListing key={movie.id} movie={movie} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;