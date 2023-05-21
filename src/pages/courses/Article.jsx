const Article = ({ img, title, content, styles }) => {
  return (
    <article
      className={`md:${styles} sm:justify-center gap-9 sm:items-center `}
    >
      <img
        src={img}
        alt=""
        className="w-full py-10 flex flex-col gap-5 md:w-[50%] h-[25rem] md:h-[25rem] lg:h-[30rem]"
      />
      <div className="md:w-[40%]">
        <div>
          <div className="text-[0.8rem] bg-lightOrange text-orange  text-center px-2 rounded-sm w-16 mb-3">
            Courses
          </div>
          <h2 className="text-[26px] md:text-[32px]  font-semibold">{title}</h2>
        </div>

        <p className="text-[1rem] text-ash ">{content}</p>
      </div>
    </article>
  );
};

export default Article;
