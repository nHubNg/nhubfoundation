const Article = ({ img, title, content }) => {
  return (
    <article>
      <img src={img} alt="" className="w-full py-10 flex flex-col gap-5" />
      <div>
        <div className="text-[0.8rem] bg-lightOrange text-orange w-1/6 text-center px-2 rounded-sm">
          Courses
        </div>
        <h2 className="text-[1.7rem] font-bold">{title}</h2>
      </div>

      <p className="text-[1rem] text-ash">{content}</p>
    </article>
  );
};

export default Article;
