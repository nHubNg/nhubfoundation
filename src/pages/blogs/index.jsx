const blog = [
  {
  "id":1,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
},
{
 "id":2,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934549/nHubFoundation/Image_2_pjmkqj.png",
 "title":"US Embassy Visits nHub Nigeria",
 "preview":"Julia .P. McKay, the cultural   affairs officer of the embassy of the United states of America on Wednesday..."
},
{
  "id":3,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design..."
},
{
  "id":4,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design..."
},
{
  "id":5,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design..."
},
{
  "id":6,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design..."
},
{
  "id":7,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
},
{
  "id":8,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
},
{
  "id":9,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
},
{
  "id":10,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
}, {
  "id":11,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
},
{
  "id":12,
 "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934515/nHubFoundation/Image_yic5ey.png",
 "title":"How to Learn UI/UX Design in 2023",
 "preview":"Learning UI/UX design in the 21st centaury is one of the best decisions you can ever make..."
}
]
import { useState, useEffect } from "react";
// import axios from "axios";
import Bloglist from "./Bloglist";
import Paginate from "./Paginate";

const Blogs = () => {
  // const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState( 1);
  const [blogsPerPage, setBlogsPerPage] = useState(6);
  console.log(currentPage, blogsPerPage);
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const res = await axios.get("http://localhost:8000/blogs");
  //     setBlog(res.data);
  //     console.log(res.data);
  //   };

  //   fetchBlogs();
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setBlogsPerPage(6);
      }
    };

    window.addEventListener("resize", handleResize);
    console.log(useEffect);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("currentPage", JSON.stringify(currentPage));
  //   localStorage.setItem("blogsPerPage", JSON.stringify(blogsPerPage));
  // }, [currentPage, blogsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setBlogsPerPage(12);
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
    <div className="my-container flex ">
      <div className="lg:w-[75%] pt-2">
        <Bloglist blog={currentBlogs} />
        <Paginate
          totalBlogs={blog.length}
          blogsPerPage={blogsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="lg:w-[25%] hidden lg:block fixed right-2 h-[100%] z-[-40]">
        <div className="relative mt-8">
          <input
            type="text"
            className="border-lightgray border-[1px] py-1 px-2 rounded-md w-[18rem] mx-auto"
            placeholder="Search....."
          />
          {/* <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684753619/nHubFoundation/Vector_p6xg9b.png"
            alt=""
            className="absolute top-2 right-4"
          /> */}
        </div>
        <div className="my-8">
          <h2 className="text-[23px] text-center font-semibold text-ash">
            Latest Posts
          </h2>
          <ul className="text-orange">
            <li>
              <a href="">How to Learn UI/UX Design in 2023</a>
            </li>
            <li>
              <a href=""></a>US Embassy Visits nHub Nigeria
            </li>
            <li>
              <a href="">How I started UI/UX Design - Terrence Eze</a>
            </li>
          </ul>
        </div>
        <div className="my-8">
          <h2 className="text-[23px] text-center font-semibold text-ash">
            Archives
          </h2>
          <ul className="text-orange">
            <li>
              <a href="">January 2023</a>
            </li>
            <li>
              <a href="">February 2023</a>
            </li>
            <li>
              <a href="">March 2023</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[23px] text-center font-semibold text-ash">
            Categories
          </h2>
          <ul className="text-orange">
            <li>
              <a href="">PlaceHer Story</a>
            </li>
            <li>
              <a href="">Internship Story</a>
            </li>
            <li>
              <a href="">nHub News</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
