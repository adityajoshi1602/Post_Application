import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Select image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      const res = await axios.post(
        "http://localhost:3000/create",
        formData
      );
      console.log(res.data);
      navigate('/posts')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <section className="w-[500px] p-8 bg-white rounded-2xl border shadow-sm">

        <h1 className="text-xl font-semibold text-center mb-6">
          Create Post
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

          {/* Upload */}
          <label className="border border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-black transition">
            <p className="text-gray-600 mb-2">
              Click to upload image
            </p>

            <input
              type="file"
              name="image"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <span className="text-xs text-gray-400">
              JPG, PNG supported
            </span>
          </label>

          {/* Caption */}
          <input
            type="text"
            name="caption"
            placeholder="Enter caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>

        </form>
      </section>
    </div>
  );
};

export default CreatePost;