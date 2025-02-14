const School = ({ formData, setFormData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#808080]">
      <div className="pb-4">
        <label>
          School<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g University of Jos"
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
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
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
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
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
        />
      </div>
      <div className="pb-4">
        <label>
          Registration Number<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g UJ/2023/001"
          value={formData.regNo}
          onChange={(e) => setFormData({ ...formData, regNo: e.target.value })}
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
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
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
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
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
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
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
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
          Allowed Internship Duration<span className="text-red">*</span>
        </label>
        <select
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="4">Four Months</option>
          <option value="6">Six Months</option>
          <option value="12">One year</option>
        </select>
      </div>

      <div className="pb-4">
        <label>
          Choose a Desired Track<span className="text-red">*</span>
        </label>
        <select
          value={formData.track}
          onChange={(e) => setFormData({ ...formData, track: e.target.value })}
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Blockchain">Blockchain (1 Year and above)</option>
          <option value="UI/UX">
            Product (UI/UX) Design(3 Months and above)
          </option>
          <option value="Embedded Systems/IOT">Embedded Systems (4 Months and above)</option>
          <option value="Data Analysis">
            Data Analysis (4 Months and above)
          </option>
          <option value="Frontend">Frontend Development (6 months and above)</option>
          <option value="Backend">Backend Development(6 months and above)</option>
          {/* <option value="Data Science">Data Science</option> */}
          {/* <option value="VR & 3D">AR/VR</option> */}

          {/* <option value="Networking/Cybersecurity">Networking/Cybersecurity</option> */}
          {/* <option value="Mobile App">Mobile App</option> */}
        </select>
        {formData.track === "Blockchain" && (
  <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
    <div className="flex justify-between">
      <h4 className="font-medium text-lg my-1">
        Blockchain Development Minimum PC Requirements
      </h4>
    </div>
    <ul className="list-disc px-4">
      <li>Processor (CPU): Intel Core i7 or AMD Ryzen 7 & Above</li>
      <li>Operating System: Microsoft Windows 10 x64, macOS, or Linux</li>
      <li>Memory: 16 GB RAM & Above</li>
      <li>Storage: 1 TB SSD for fast storage and performance</li>
      <li>Graphics: Dedicated GPU with at least 4 GB VRAM (e.g., NVIDIA GTX 1650 or better)</li>
      <li>Network: Reliable internet connection for blockchain sync and development</li>
    </ul>
  </div>
)}
{formData.track === "Embedded Systems/IOT" && (
  <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
    <div className="flex justify-between">
      <h4 className="font-medium text-lg my-1">
        Embedded Systems/IOT Development Minimum PC Requirements
      </h4>
    </div>
    <ul className="list-disc px-4">
      <li>Processor (CPU): Intel Core i5 or AMD Ryzen 5 & Above</li>
      <li>Operating System: Microsoft Windows 10 x64, macOS, or Linux</li>
      <li>Memory: 8 GB RAM & Above</li>
      <li>Storage: 500 GB internal storage drive (SSD preferred)</li>
      <li>USB Ports: At least 3 USB ports (for connecting IoT devices)</li>
      <li>Connectivity: Wi-Fi and Bluetooth support for IoT communication</li>
      <li>Additional Tools: Support for VirtualBox or VMWare for running embedded simulations</li>
    </ul>
  </div>
)}
        {formData.track === "Frontend" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">
                Frontend Development Minimum PC Requirements
              </h4>
            </div>
            <ul className="list-disc px-4">
              <li>Processor (CPU): Intel Core i5 & Above</li>
              <li>Operating System:Microsoft Windows 10 x64 & Above</li>
              <li>Memory:8 GB RAM & Above</li>
              <li>Storage:500 GB internal storage drive</li>
            </ul>
          </div>
        )}
        {formData.track === "Backend" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">
                Backend Development Minimum PC Requirements
              </h4>
            </div>
            <ul className="list-disc px-4">
              <li>RAM: 8 GB RAM </li>
              <li>Operating System: Windows 10 </li>
              <li>CPU: core i5</li>
              <li>Storage: 256 SSD</li>
            </ul>
          </div>
        )}
        {formData.track === "UI/UX" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">
                Product (UI/UX) Minimum PC Requirements
              </h4>
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
        {/* {formData.track === "VR & 3D" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <h4 className="font-medium text-lg my-1">
              AR/VR App Minimum PC Requirements
            </h4>
            <ul className="list-disc px-4">
              <li>Ram: 8GB and Above</li>
              <li>Intel i5 and above </li>
              <li>At least Dual Core</li>
              <li>Frequency: 2.0 and above</li>
              <li>Storage: 500GB (Preferably SSD)</li>
              <li>Graphics Memory:4GB Graphics Card Dedicated is required. </li>
            </ul>
            <h4 className="font-medium text-lg my-1">
              AR/VR App Minimum Software Requirements
            </h4>
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
              <h4 className="font-medium text-lg my-1">
                Mobile App PC Requirements
              </h4>
            </div>
            <ul className="list-disc px-4">
              <li>Ram: 8GB and Above</li>
              <li>Intel i5 and above </li>
              <li>At least Dual Core</li>
              <li>Frequency: 2.0 and above</li>
              <li>Storage: 250GB and above (Preferably SSD)</li>
              <li>Graphics Memory: Dedicated is recommended. </li>
            </ul>
            <h4 className="font-medium text-lg my-1">
              Mobile App MacOs Requirements
            </h4>
            <ul className="list-disc px-4">
              <li>
                MacBook Pro 2016 and above. (Apple Silicon is Recommended)
              </li>
            </ul>
          </div>
        )} */}
        {formData.track === "Data Analysis" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">
                Data Analysis Minimum PC Requirements
              </h4>
            </div>
            <ul className="list-disc px-4">
              <li>Processor (CPU): Intel Core i5</li>
              <li>Operating System:Microsoft Windows 10 x64</li>
              <li>Memory:8 GB RAM</li>
              <li>Storage:500 GB internal storage drive</li>
              <li>Monitor/Display:13&apos; LCD monitor</li>
            </ul>
          </div>
        )}
        {/* {formData.track === "Data Science" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">
                Data Science Minimum PC Requirements
              </h4>
            </div>
            <ul className="list-disc px-4">
              <li>Processor (CPU): Intel Core i5</li>
              <li>Operating System:Microsoft Windows 10 x64</li>
              <li>Memory:8 GB RAM</li>
              <li>Storage:500 GB internal storage drive</li>
              <li>Monitor/Display:13&apos; LCD monitor</li>
            </ul>
          </div>
        )} */}
        {/* {formData.track === "Networking/Cybersecurity" && (
          <div className="bg-orange text-white py-3 px-3 mt-3 rounded-lg">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg my-1">
                Networking/Cybersecurity PC Requirements
              </h4>
            </div>
            <ul className="list-disc px-4 font-light ">
              <li>Processor: 2.5Ghz</li>
              <li>Operating System:Microsoft Windows 10 x64</li>
              <li>Memory:4 GB RAM & 8GB</li>
              <li>Storage:320 GB HDD/SSD and above</li>
              <li>Core i3 and Above</li>
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default School;
