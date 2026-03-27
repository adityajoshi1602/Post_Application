import React from 'react'

const CreatePost = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <section className="w-[550px] p-9 bg-white rounded-2xl border shadow-md">

        <h1 className="text-2xl font-semibold text-center mb-8">
          Create Post
        </h1>

        <form className="flex flex-col gap-6">

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-black transition">
            <label className="cursor-pointer block">
              <p className="text-gray-600 text-lg mb-2">
                Click to upload image
              </p>

              <input type="file" className="hidden" />

              <span className="text-sm text-gray-400">
                JPG, PNG supported
              </span>
            </label>
          </div>

          <input
            type="text"
            placeholder="Enter caption"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>

        </form>

      </section>
    </div>
  )
}

export default CreatePost