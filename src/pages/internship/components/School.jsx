// import React, { useState } from "react";

const School = ({ formData, setFormData }) => {
  // const [hideDiv, setHideDiv] = useState(false);

  // const ToggleDivVisibility = () =>{
  //   setHideDiv(!hideDiv)
  // }
  return (
    <div>
      <div className="pb-4">
        <label>
          School<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g University of Jos"
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
          className="w-[100%] border-orange border-[1px] py-1 px-2 rounded-2xl outline-0"
        />
      </div>
      <div className="pb-4">
        <label>
          Department<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g Computer Science"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
          className="w-[100%] border-orange border-[1px] py-1 px-2 rounded-2xl outline-0"
        />
      </div>
      <div className="pb-4">
        <label>
          Course of Study<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g Cybersecurity"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          className="w-[100%] border-orange border-[1px] py-1 px-2 rounded-2xl outline-0"
        />
      </div>
      <div className="pb-4">
        <label>
          Internship start date<span className="text-red">*</span>
        </label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
          className="w-[100%] border-orange border-[1px] py-1 px-2 rounded-2xl outline-0"
        />
      </div>
      <div className="pb-4">
        <label>
          Internship end date<span className="text-red">*</span>
        </label>
        <input
          type="date"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
          className="w-[100%] border-orange border-[1px] py-1 px-2 rounded-2xl outline-0"
        />
      </div>

      <div className="pb-4">
        <label>
          Programming Experience<span className="text-red">*</span>
        </label>
        <select
          value={formData.experience}
          onChange={(e) =>
            setFormData({ ...formData, experience: e.target.value })
          }
          className="w-[100%]  border-orange border-[1px] outline-0 py-2 pl-2 pr-4  rounded-xl"
        >
          <option value="" disabled selected hidden>
            Programming Experience
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="pb-4">
        <label>
          Choose a Desired Track<span className="text-red">*</span>
        </label>
        <select
          value={formData.track}
          onChange={(e) => setFormData({ ...formData, track: e.target.value })}
          className="w-[100%]  border-orange border-[1px] outline-0 py-2 pl-2 pr-4  rounded-xl"
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Product (UI/UX) Design">Product (UI/UX) Design</option>
          <option value="Data Science">Data Science</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="AR/VR">AR/VR</option>
          <option value="Embedded Systems">Embedded Systems</option>
          <option value="Networking/Cybersecurity">Networking/Cybersecurity</option>
          <option value="Mobile App">Mobile App</option>
        </select>
        {formData.track === "Frontend Development" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">Frontend Development PC Requirements</h4>
              {/* <button onClick={ToggleDivVisibility}>
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1687254880/nHubFoundation/icons8-close-24_u4nq4b.png"
                  alt=""
                />
              </button> */}
            </div>
            <ul className="list-disc px-4">
              <li>Processor (CPU): Intel Core i5 & Above</li>
              <li>Operating System:Microsoft Windows 10 x64 & Above</li>
              <li>Memory:8 GB RAM & Above</li>
              <li>Storage:500 GB internal storage drive</li>
            </ul>
          </div>
        )}
         {formData.track === "Backend Development" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">Backend Development PC Requirements</h4>
              {/* <button onClick={ToggleDivVisibility}>
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1687254880/nHubFoundation/icons8-close-24_u4nq4b.png"
                  alt=""
                />
              </button> */}
            </div>
            <ul className="list-disc px-4">
              <li>Processor (CPU): Intel Core i5 & Above</li>
              <li>Operating System:Microsoft Windows 10 x64 & Above</li>
              <li>Memory:8 GB RAM & Above</li>
              <li>Storage:500 GB internal storage drive</li>
            </ul>
          </div>
        )}
        {formData.track === "Product (UI/UX) Design" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">Product (UI/UX) PC Requirements</h4>
              {/* <button onClick={ToggleDivVisibility}>
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1687254880/nHubFoundation/icons8-close-24_u4nq4b.png"
                  alt=""
                />
              </button> */}
            </div>
            <ul className="list-disc px-4">
              <li>8GB RAM</li>
              <li>Core i3 and Above</li>
              <li> 2.5Ghz Processor Speed</li>
              <li>Storage:320 GB HDD/SSD & Above</li>
              <li>1GB Graphics Card & Above (Recommended)</li>
            </ul>
          </div>
        )}
        {formData.track === "AR/VR" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <h4 className="font-medium text-lg my-1">AR/VR App PC Requirements</h4>
            <ul className="list-disc px-4">
              <li>Ram: 8GB and Above</li>
              <li>Intel i5 and above </li>
              <li>At least Dual Core</li>
              <li>Frequency: 2.0 and above</li>
              <li>Storage: 500GB (Preferably SSD)</li>
              <li>Graphics Memory:4GB Graphics Card Dedicated is required. </li>
            </ul>
            <h4 className="font-medium text-lg my-1">AR/VR App Software Requirements</h4>
            <ul className="list-disc px-4">
              <li>Blender</li>
              <li>Unity</li>
              <li>Virtual Studio</li>
              <li>Oculus Developer Hub</li>
            </ul>
          </div>
        )}
        {formData.track === "Mobile App" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">Mobile App PC Requirements</h4>
              {/* <button onClick={ToggleDivVisibility}>
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1687254880/nHubFoundation/icons8-close-24_u4nq4b.png"
                  alt=""
                />
              </button> */}
            </div>
            <ul className="list-disc px-4">
              <li>Ram: 8GB and Above</li>
              <li>Intel i5 and above </li>
              <li>At least Dual Core</li>
              <li>Frequency: 2.0 and above</li>
              <li>Storage: 250GB and above (Preferably SSD)</li>
              <li>Graphics Memory: Dedicated is recommended. </li>
            </ul>
            <h4 className="font-medium text-lg my-1">Mobile App MacOs Requirements</h4>
            <ul className="list-disc px-4">
              <li>
                MacBook Pro 2016 and above. (Apple Silicon is Recommended)
              </li>
            </ul>
          </div>
        )}
        {formData.track === "Data Analysis" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">Data Analysis PC Requirements</h4>
              {/* <button onClick={ToggleDivVisibility}>
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1687254880/nHubFoundation/icons8-close-24_u4nq4b.png"
                  alt=""
                />
              </button> */}
            </div>
            <ul className="list-disc px-4">
              <li>Processor (CPU): Intel Core i5</li>
              <li>Operating System:Microsoft Windows 10 x64</li>
              <li>Memory:8 GB RAM</li>
              <li>Storage:500 GB internal storage drive</li>
              <li>Monitor/Display:13" LCD monitor</li>
            </ul>
          </div>
        )}
         {formData.track === "Networking/Cybersecurity" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">Data Analysis PC Requirements</h4>
              {/* <button onClick={ToggleDivVisibility}>
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1687254880/nHubFoundation/icons8-close-24_u4nq4b.png"
                  alt=""
                />
              </button> */}
            </div>
            <ul className="list-disc px-4 font-light ">
              <li>Processor: 2.5Ghz</li>
              <li >Operating System:Microsoft Windows 10 x64</li>
              <li>Memory:4 GB RAM & 8GB</li>
              <li>Storage:320 GB HDD/SSD and above</li>
              <li>Core i3 and Above</li>
            </ul>
          </div>
        )}
      </div>
      <div className="pb-4">
        <label>
          Allowed Internship Duration<span className="text-red">*</span>
        </label>
        <select
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          className="w-[100%]  border-orange border-[1px] outline-0 py-2 pl-2 pr-4  rounded-xl"
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Four Months">Four Months</option>
          <option value="Six Months">Six Months</option>
          <option value="One year">One year</option>
        </select>
      </div>
    </div>
  );
};

export default School;
