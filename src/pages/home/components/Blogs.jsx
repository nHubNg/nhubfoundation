import blogs from "../../../blogs.json";
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
        {blogs.map((blog) => {
          return (
            <div className="border-[1px] shadow-[lightShadow] " key={blog.id}>
              <div className="p-5">
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
      <div className="w-[8rem] lg:w-[10rem] py-2 mx-auto text-center bg-white border-[1px] border-orange mb-4 lg:my-16">
        <a className="font-[500] text-orange" href="">
          View All
        </a>
      </div>
    </div>
  );
};

export default Blogs;
