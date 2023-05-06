import blogs from "../../blogs.json";

const Blogs = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col gap-3">
        {blogs.map((blog) => {
          return (
            <div
              className="border-[1px] border-veryLightGray shadow-[lightShadow] "
              key={blog.id}
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
      <div className="flex justify-center items-center gap-4 mb-5">
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
      </div>
    </div>
  );
};

export default Blogs;
