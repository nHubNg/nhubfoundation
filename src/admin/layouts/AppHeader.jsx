
const AppHeader = ({ total }) => {
  return (
    <>
      <div className="flex justify-center mt-6 md:hidden">
        <div className=" border-[0.5px] border-adminBorder py-2 w-[90%] flex justify-center px-4 rounded-sm">
          <p>Total:</p>
          <p>{total}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center items-center py-5 w-[70%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
          <div className=" border-[0.5px] border-adminBorder py-2 w-[70%] flex justify-between px-4 rounded-md">
            <p>Total:</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
