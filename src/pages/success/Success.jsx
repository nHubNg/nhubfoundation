const Success = () => {
  return (
    <main className="bg-lightBlue py-20 text-center">
      <div className="bg-white flex flex-col  mx-auto w-4/5 py-8 px-6 rounded-3xl gap-6">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683207427/Success_Icon_nby0r6.png"
            alt="success"
            className="w-16"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-textAsh text-[1rem]">Payment Success!</h1>
            <h2 className="font-bold text-[1.5rem]">NGN 1,000,000</h2>
          </div>

          <hr className="w-full h-px" />

          <div className="flex justify-between">
            <p className="text-textAsh text-[1rem]">Ref Number</p>
            <h3 className="font-bold text-[1rem]">000085752257</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-textAsh text-[1rem]">Payment Time</p>
            <div>
              <h3 className="font-bold text-[1rem]">25-02-2023, 13:22:16</h3>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-textAsh text-[1rem] ">Payment Method</p>
            <h2 className="font-bold text-[1rem] ">Bank Transfer</h2>
          </div>
          <div className="flex justify-between">
            <p className="text-textAsh text-[1rem]">Sender Name</p>
            <h3 className="font-bold text-[1rem]">Antonio Roberto</h3>
          </div>
          <hr className="w-full h-px border-dashed" />
          <div className="flex justify-between">
            <p className="text-textAsh text-[1rem]">Amount</p>
            <h3 className="font-bold text-[1rem]">NGN 1,000,000</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-textAsh text-[1rem]">Admin fee</p>
            <h3 className="font-bold text-[1rem]">NGN 193.00</h3>
          </div>
        </div>
      </div>
      <div className="text-[0.8rem] w-4/5 mx-auto my-4 flex flex-col gap-2">
        <button className="text-textAsh w-full border-text-textAsh border p-3 rounded-xl flex justify-center items-center gap-2">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683212011/import_p5pyag.png"
            alt=""
          />
          Get PDF Receipt
        </button>
        <button className="bg-darkPurple text-white w-full p-3 rounded-xl">
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default Success;
