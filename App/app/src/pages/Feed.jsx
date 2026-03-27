import React, { useState } from "react";
import axios from 'axios'

const Feed = () => {
  const [posts] = useState([
  {
    id: 1,
    image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    caption: "First post 🚀",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    caption: "Another day, another post",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    caption: "Clean UI matters",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    caption: "Minimal feed design",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    caption: "Scrolling feels smooth",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    caption: "Nature hits different",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg",
    caption: "Focus on details",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    caption: "Keep building",
  },
  ]);

  return (
    <div className="w-screen min-h-screen bg-white flex justify-center py-6">

      {/* Narrow feed for density */}
      <div className="w-full max-w-sm flex flex-col gap-4">

        <h1 className="text-xl font-semibold text-center text-gray-900">
          Feed
        </h1>

        {posts.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >

            {/* Image (small height) */}
            <img
              src={p.image}
              alt="post"
              className="w-full h-[180px] object-cover"
            />

            {/* Caption */}
            <div className="px-3 py-2">
              <p className="text-sm text-gray-800">
                {p.caption}
              </p>
            </div>


          </div>
        ))}

      </div>
    </div>
  );
};

export default Feed;