import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const Cta = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className=" bg-orange  py-7 lg:py-20">
        <div className="w-[95%] mx-auto flex justify-between items-center  text-center my-container">
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[28px] text-white font-[600]">
            <span>
              {counterOn && <CountUp start={0} end={1500} duration={2} />}+
            </span>
            <span className="text-[8px] md:text-[12px] lg:text-[13px]  font-[500]">
              Students Trained
            </span>
          </p>
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[28px] text-white  font-[600]">
            <span>
              {counterOn && <CountUp start={0} end={1500} duration={2} />}+
            </span>
            <span className="text-[8px]  md:text-[12px] lg:text-[13px]  font-[500]">
              Happy Customers
            </span>
          </p>
          <p className="hidden md:flex flex-col text-[16px] md:text-[23px] lg:text-[28px] text-white  font-[600]">
            <span>
              {counterOn && <CountUp start={0} end={15} duration={2} />}+
            </span>
            <span className="text-[8px] md:text-[12px] lg:text-[13px]  font-[500]">
              Running Projects
            </span>
          </p>
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[28px] text-white  font-[600]">
            <span>
              {counterOn && <CountUp start={0} end={1500} duration={2} />}+
            </span>
            <span className="text-[8px] md:text-[12px] lg:text-[13px]  font-[500]">
              Completed Projects
            </span>
          </p>
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[28px] text-white  font-[600]">
            <span>
              {counterOn && <CountUp start={0} end={7} duration={2} />}+
            </span>
            <span className="text-[8px] md:text-[12px] lg:text-[13px]  font-[500]">
              Years of Experience
            </span>
          </p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Cta;
