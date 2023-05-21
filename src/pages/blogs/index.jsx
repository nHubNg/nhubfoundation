import { useEffect, useState } from "react";
import axios from "axios";
import Bloglist from "./Bloglist";
import Paginate from "./Paginate";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const [blogsPerPage, setBlogsPerPage] = useState(
    parseInt(localStorage.getItem("blogsPerPage")) || 3
  );
  console.log(currentPage, blogsPerPage);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:8000/blogs");
      setBlog(res.data);
      console.log(res.data);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setBlogsPerPage(6);
      } else {
        setBlogsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    console.log(useEffect);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
    localStorage.setItem("blogsPerPage", blogsPerPage.toString());
  }, [currentPage, blogsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setBlogsPerPage(12);
      } else {
        setBlogsPerPage(6);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const lastBlogIndex = currentPage * blogsPerPage;
  const firstBlogIndex = lastBlogIndex - blogsPerPage;
  const currentBlogs = blog.slice(firstBlogIndex, lastBlogIndex);
  return (
    <div className="my-container">
      <Bloglist blog={currentBlogs} />
      <Paginate
        totalBlogs={blog.length}
        blogsPerPage={blogsPerPage}
        setCurrentPage={setCurrentPage}
      />

      {/* <div className="flex justify-center items-center gap-4 mb-5">
        <button className="flex gap-1 justify-center items-center text-ash">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683117975/nHubFoundation/Vector_2_sajtck.png"
            alt=""
          />
          Prev
        </button>
        <div>
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683190294/nHubFoundation/Vector_4_duf3e9.png"
            alt=""
          />
        </div>
        <button className="flex gap-1 justify-center items-center text-ash">
          <p>Next</p>
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683118186/nHubFoundation/Vector_3_msofvi.png"
            alt=""
          />
        </button>
      </div> */}
    </div>
  );
};

export default Blogs;
