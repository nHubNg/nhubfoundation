const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

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
    <div >
      <div className="pb-4">
        <label>
          Full Name<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-[100%] border-orange border-[1px] py-1 px-2 outline-0 rounded-2xl"
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
          className="w-[100%] border-orange border-[1px] py-1 px-2  outline-0 rounded-2xl"
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
          className="w-[100%]  border-orange border-[1px] py-1 px-2 outline-0 rounded-2xl"
        />
      </div>
      <div className="md:flex md:justify-between gap-10">
        <div className="pb-4">
          <label>
            {" "}
            Interview Location<span className="text-red">*</span>
          </label>
          <select
            className="w-[100%]  border-orange border-[1px] outline-0 py-2 pl-2 pr-4   rounded-xl"
            value={formData.interview}
            onChange={(e) =>
              setFormData({ ...formData, interview: e.target.value })
            }
          >
            <option value="" disabled selected hidden>
            Select a preferred interview Location
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
            className="w-[100%]  border-orange border-[1px] outline-0 py-2 pl-2 pr-4   rounded-xl"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="" disabled selected hidden>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
