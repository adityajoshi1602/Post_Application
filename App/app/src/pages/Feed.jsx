import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      console.log(res.data);

      setPosts(res.data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white flex justify-center py-6">

      <div className="w-full max-w-sm flex flex-col gap-4">

        <h1 className="text-xl font-semibold text-center text-gray-900">
          Feed
        </h1>

        {/* If no posts */}
        {posts.length === 0 && (
          <p className="text-center text-gray-400 text-sm">
            No posts yet
          </p>
        )}

        {/* Posts */}
        {posts.map((p) => (
          <div
            key={p._id}   // ✅ MongoDB id
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >

            {/* Image */}
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