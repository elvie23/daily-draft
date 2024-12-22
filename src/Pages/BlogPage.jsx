import { useEffect } from "react";
import {Link} from 'react-router'

const BlogsPost = [
  { id: 1 , title: "The beauty of photography", image: "/images/pic1.jpg" },
  { id: 2, title: "A place where you can be happy", image: "/images/pic2.jpg" },
  { id: 3, title: "To see the future", image: "/images/pic3.jpg" },
  { id: 4, title: "Why do small things matter?", image: "/images/pic4.jpg" },
  { id: 1, title: "The good in bad moments", image: "/images/pic5.jpg" },
];

const Blogs = () => {
  useEffect(() => {
    document.title = "Daily Draft - Blogs";
  });
  return (
    <div className="p-16 space-y-3">
      <p className="text-7xl font-[Oswald] font-light tracking-widest text-center mt-10">
        Latest Blogs{" "}
      </p>

      <p className="text-2xl font-[Oswald] font-light tracking-widest text-center mt-10">
        "Explore a world of captivating blogs, tailored to spark your curiosity
        and inspire fresh ideas with every click!"{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 p-20">
        {BlogsPost.map((blog, index) => (
          <div
            key={blog.id}
            className="p-10 flex flex-col items-center border-1 border-black border-solid border"
          >
            <img
              src={blog.image}
              className="w-full h-full object-cover mb-4 rounded-md"
              alt={blog.title}
            />

            <p className="text-2xl font-[Poppins] font-medium text-justify mb-2">
              {blog.title}
            </p>

            <Link to="/contact" className="btn2 mt-10 w-full text-center">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
