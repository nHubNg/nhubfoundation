
const AppHeader = ({ total, handleNameSearch }) => {
  return (
    <>
      <div className="flex justify-center mt-6 md:hidden">
      <div className="flex justify-center items-center py-5 px-10 w-[70%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
      <input type="text" placeholder="Search First Name, Last Name or Email" className=" border-[0.5px] border-adminBorder py-2 w-[70%] flex justify-between px-4 rounded-md" onKeyUp={handleNameSearch.bind(this)}/>
          <p>Total:</p>
          <p>{total}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center items-center py-5 w-[70%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
          <input type="text" placeholder="Search First Name, Last Name or Email" className=" border-[0.5px] border-adminBorder py-2 w-[70%] flex justify-between px-4 rounded-md" onKeyUp={handleNameSearch.bind(this)}/>
            <p>Total:</p>
            <p>{total}</p>
          </div>
        </div>
      
    </>
  );
};

export default AppHeader;
