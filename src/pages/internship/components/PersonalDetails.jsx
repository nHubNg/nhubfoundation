import { useContext, useEffect } from "react";
import { FormContext } from "..";

const PersonalDetails = () => {
  const [formData,setFormData] = useContext(FormContext)

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    const data = {
      type,
      name,
      value,
    };
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('myDataKey', dataJSON);
    const storedDataJSON = localStorage.getItem('myDataKey');
    const storedData = JSON.parse(storedDataJSON);
    console.log(storedData);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (event) => {
    setFormData({
      ...formData,
      selectOption: event.target.value,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-textAsh" >
      <div className="pb-4">
        <label>
          First Name<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
        />
      </div>
      <div className="pb-4">
        <label>
          Last Name<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
        />
      </div>
      <div className="pb-4">
        <label>
          Email<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g yourname@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-[100%] border-[#808080] border-[1px] py-2 px-2  outline-0 rounded-[5px]"
        />
      </div>
      <div className="pb-4">
        <label>
          Phone Number<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g +2348000000000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-[100%]  border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
        />
      </div>
      
        <div className="pb-4">
          <label>
            {" "}
            Interview Location<span className="text-red">*</span>
          </label>
          <select
            className="w-[100%] border-[#808080] border-[1px] py-2 px-2  outline-0 rounded-[5px]"
            value={formData.interview}
            onChange={(e) =>
              setFormData({ ...formData, interview: e.target.value })
            }
          >
            <option value="" disabled selected hidden>
            Select 
            </option>
            <option value="On-Site">On-Site</option>
            <option value="Virtual">
              Virtual (Have good network connection)
            </option>
          </select>
        </div>
        <div className="pb-4">
          <label>
            Gender<span className="text-red">*</span>
          </label>
          <select
            className="w-[100%] border-[#808080] border-[1px] py-2 px-2 cursor-pointer outline-0 rounded-[5px]"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="" disabled selected hidden>
              Select 
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      
    </div>
  );
};

export default PersonalDetails;
