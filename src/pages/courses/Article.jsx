const Article = ({ img, title, content, styles }) => {
  return (
    <article
      className={`sm:${styles} sm:justify-between sm:items-center sm:mx-5`}
    >
      <img
        src={img}
        alt=""
        className="w-full py-10 flex flex-col gap-5 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]"
      />
      <div>
        <div>
          <div className="text-[0.8rem] bg-lightOrange text-orange  text-center px-2 rounded-sm w-16 mb-3">
            Courses
          </div>
          <h2 className="text-2xl font-bold sm:text-lg lg:text-3xl xl:text-4xl">
            {title}
          </h2>
        </div>

        <p className="text-[1rem] text-ash sm:text-sm sm:max-w-[18rem] lg:max-w-md  xl:text-xl xl:max-w-xl">
          {content}
        </p>
      </div>
    </article>
  );
};

export default Article;
