import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const shuffledPosts = shuffleArray(data.posts); // Shuffle the posts
        setPosts(shuffledPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

   if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl text-emerald-950 font-[Oswald]">
        Loading...
      </div>
    );
  }
  return (
    <div className="p-16 space-y-3">
      <p className="text-7xl font-[Oswald] font-light tracking-widest text-center mt-10">
        Forum Posts
      </p>

      <p className="text-2xl font-[Oswald] font-light tracking-widest text-center mt-10">
        "Dive into the discussion! Share your thoughts and ideas with the
        community."
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 p-24">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 flex flex-col justify-between items-start border border-black rounded shadow-md"
            style={{
              height: "320px", // Ensures uniform height
              minWidth: "250px", // Optional: Adjust minimum width
            }}
          >
            <h2 className="text-2xl font-[Poppins] font-medium text-justify uppercase mb-2">
              {post.title}
            </h2>
            <p
              className="text-sm text-black font-[Poppins] overflow-hidden mb-4"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                lineHeight: "1.5em",
                maxHeight: "4.5em",
              }}
            >
              {post.body}
            </p>
            <small className="text-xs text-gray-500 mb-4">
              Tags: {post.tags.join(", ")}
            </small>
            <Link
              to={`/posts/${post.id}`}
              className="btn2 w-full text-center"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
