const Bloglist = ({ blog }) => {
  return (
    <div className="flex flex-col items-center md:grid  md:grid-cols-2  sm:grid sm:grid-cols-2   lg:grid-cols-3 gap-x-6 gap-y-10 ">
      {blog.map((blog) => {
        return (
          <div
            className="border-[1px] border-lightgray shadow-[lightShadow] rounded-lg w-[100%] "
            key={blog.id}
          >
            <div className="p-5 flex flex-col justify-center items-center md:block">
              <img
                className="block max-w-[100%] object-cover"
                src={blog.img}
                alt=""
              />
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
  );
};

export default Bloglist;
