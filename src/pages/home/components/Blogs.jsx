import blogs from "../../../blogs.json";
const Blogs = () => {
  return (
    <div className="my-container">
      <h3 className="text-[28px] text-ash font-semibold text-center">
        Our Latest Blogs
      </h3>
      <p className="text-textAsh text-[15px] text-center py-2">
        View all our latest Articles
      </p>
      <div className="flex flex-col">
        {blogs.map((blog) => {
          return (
            <div
              className="border-[1px] border-veryLightGray shadow-[lightShadow] "
              key={blog.img}
            >
              <div className="p-5">
                <img className="" src={blog.img} alt="" />
                <h4 className="text-[24px] font-[500] text-ash py-4">
                  {blog.title}
                </h4>
                <p className="text-[15px] font-[400] text-textAsh ">
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
      <div className="w-[8rem] py-2 mx-auto text-center bg-white border-[1px] border-orange mb-4">
        <a className="font-[500] text-orange" href="">
          View All
        </a>
      </div>
    </div>
  );
};

export default Blogs;
