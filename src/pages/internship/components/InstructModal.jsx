import { useState } from "react";
import {CiWarning} from 'react-icons/ci';


export const InstructModal=()=>{

    return(
        <div className="">
             
        <div className="text-center capitalize  font-semibold">
        <h1 className="text-2xl">Instruction</h1>
        <p>read carefully before attempting to fill the form</p>
        </div>
        <div className=" p-4 text-[14px]">
          <div className=" items-center mt-6 justify-between w-[100%]">
            <CiWarning className="text-3xl text-red font-bold" />
            <p>Read and fill every form field carefully as the form completion process counts towards final consideration for internship position at the hub.</p>
          </div>
          <div className=" items-center mt-6 justify-between w-[100%]">
            <CiWarning className="text-3xl text-red font-bold" />
            <p>For whichever technological stack you will be picking during this applications process, make sure you've done your research into it as there will be no room for change once accepted to that track.</p>
          </div>
          <div className=" items-center mt-6 justify-between w-[100%]">
            <CiWarning className="text-3xl text-red font-bold" />
            <p>Personal computer (Laptop) is the major tool for all you'll be doing when accepted for internship at nHub, as such make sure you have a working PC and internet access means on or before the registered internship start date.</p>
          </div>
          <div className=" items-center mt-6 justify-between w-[100%]">
            <CiWarning className="text-3xl text-red font-bold" />
            <p>As a point of note, you should know that nHub does not provide anyone with laptop but can help guide you in getting one that matches your choosen track requirements</p>
          </div>
        </div>
        
       
      
    
            
    </div>
    )
}