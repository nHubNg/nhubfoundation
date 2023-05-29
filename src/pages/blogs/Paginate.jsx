const Paginate = ({ totalBlogs, blogsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className=" flex justify-center items-center gap-3 my-5">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="px-3 py-1 rounded-md border-[1px] border-lightgray hover:bg-orange hover:text-white transition-all duration-300 "
          >
            {page}
          </button>
        );
      })}
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

export default Paginate;
