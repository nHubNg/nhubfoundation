const Paginate = ({ totalBlogs, blogsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className=" flex justify-center items-center gap-3">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="px-3 py-1 border-[1px] border-lightgray hover:bg-orange hover:text-white transition-all duration-300 "
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginate;
