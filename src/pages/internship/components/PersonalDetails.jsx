import { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";

const PersonalDetails = () => {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-textAsh">
      <div className="pb-4">
        <label>
          First Name<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
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
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
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
          <option value="Physical">On-Site</option>
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
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </form>
  );
};

export default PersonalDetails;
