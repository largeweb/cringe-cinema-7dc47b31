// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the movie object interface
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
    title: "The Shawshank Redemption",
    rating: 9.3,
    upvotes: 150,
    downvotes: 5,
    thumbnail: "https://via.placeholder.com/300x200",
    comments: ["Great movie!", "A classic."],
  },
  {
    id: "2",
    title: "The Godfather",
    rating: 9.2,
    upvotes: 140,
    downvotes: 10,
    thumbnail: "https://via.placeholder.com/300x200",
    comments: ["A masterpiece.", "Best movie ever."],
  },
  {
    id: "3",
    title: "The Dark Knight",
    rating: 9.0,
    upvotes: 130,
    downvotes: 15,
    thumbnail: "https://via.placeholder.com/300x200",
    comments: ["A superhero classic.", "Heath Ledger was amazing."],
  },
  {
    id: "4",
    title: "Pulp Fiction",
    rating: 8.9,
    upvotes: 120,
    downvotes: 20,
    thumbnail: "https://via.placeholder.com/300x200",
    comments: ["So original!", "Love the dialogue."],
  },
  {
    id: "5",
    title: "Schindler's List",
    rating: 8.9,
    upvotes: 110,
    downvotes: 25,
    thumbnail: "https://via.placeholder.com/300x200",
    comments: ["Very powerful.", "A must-see."],
  },
  {
    id: "6",
    title: "12 Angry Men",
    rating: 8.9,
    upvotes: 100,
    downvotes: 30,
    thumbnail: "https://via.placeholder.com/300x200",
    comments: ["Incredible acting.", "A courtroom drama for the ages."],
  },
];

const MovieListing: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img src={movie.thumbnail} alt={movie.title} className="mb-2 rounded" />
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p>Rating: {movie.rating}/10</p>
      <p>Upvotes: {movie.upvotes}</p>
      <p>Downvotes: {movie.downvotes}</p>
      <p>Comments: {movie.comments.length}</p>
    </div>
  );
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>(mockMovies);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Movie Listings</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full px-4 py-2 border rounded mb-6"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredMovies.map((movie) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <MovieListing movie={movie} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}