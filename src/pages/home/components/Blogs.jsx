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
 "preview":"Julia .P. McKay, the cultural   affairs officer of the embassy of the United states of America on Wednesday......."
},
{
  "id":3,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design...."
},
{
  "id":4,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design...."
},
{
  "id":5,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design...."
},
{
  "id":6,
  "img":"https://res.cloudinary.com/nhubnacademy/image/upload/v1682934516/nHubFoundation/Image_1_elrbvy.png",
  "title":"How Started UI/UX Design - Terrence Eze",
  "preview":"The UI/Ux lead at nHub Nigeria, Mr. Terrence Eze took us through how he developed a career in UI/UX design...."
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
const visibleBlogs = blog.slice(0, 3);
const Blogs = () => {
  return (
    <div className="my-container">
      <div className="my-16">
        <h3 className="text-[28px] md:text-[32px] lg:text-[36px] text-ash font-semibold text-center">
          Our Latest Blogs
        </h3>
        <p className="text-textAsh text-[15px] text-center py-2">
          View all our latest Articles
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 md:my-10">
        {visibleBlogs.map((blog) => {
          return (
            <div
              className="border-[1px] border-lightgray shadow-[lightShadow] rounded-lg"
              key={blog.id}
            >
              <div className=" m-8">
                <div className="md:w-[20rem]">
                  <img className="w-full block" src={blog.img} alt="" />
                </div>
                <h4 className="text-[24px] font-[500] text-ash py-4 lg:w-[20ch]">
                  {blog.title}
                </h4>
                <p className="text-[15px] font-[400] text-textAsh lg:w-[30ch]">
                  {blog.preview}
                </p>
                <div className="bg-orange w-[7rem] text-center rounded-md py-2 my-3 cursor-pointer hover:bg-purple  hover:text-white transition-all duration-300 hover:scale-110ho">
                  <a className="text-white" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[8rem]  py-2 mx-auto text-center bg-white border-[1px] border-orange mt-5 mb-4 lg:my-16 lg:px-3 group lg:hover:w-[8rem] lg:transition-[width] duration-700 cursor-pointer">
        <a className="font-[500] text-orange flex justify-center items-center gap-2 lg:group-hover:justify-between">
          View All
          <img
            className="lg:hidden lg:group-hover:flex "
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683766837/nHubFoundation/arrow-right_zcpsmr.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Blogs;
