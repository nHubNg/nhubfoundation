import blogs from "../../../blogs.json";
const visibleBlogs = blogs.slice(0, 3);
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
              className="border-[1px] border-lightgray shadow-[lightShadow] "
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
                <div className="bg-orange w-[7rem] text-center rounded-md py-2 my-3">
                  <a className="text-white" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[8rem]  py-2 mx-auto text-center bg-white border-[1px] border-orange mb-4 lg:my-16 lg:px-3 group lg:hover:w-[10rem] lg:transition-[width]">
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
