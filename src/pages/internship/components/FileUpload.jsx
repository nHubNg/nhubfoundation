import { useState, useRef } from "react";

const FileUpload = ({formData, setFormData}) => {
  const [cover, setCover] = useState("");
  const coverInput = useRef(null);

  const [input, setInput] = useState("");
  const coverInput2 = useRef(null);

  const handleCoverInput = (e) => {
    e.preventDefault();
    coverInput.current.click();
  };

  const handleCoverInput2 = (e) => {
    e.preventDefault();
    coverInput2.current.click();
  }

  return (
    <div className="flex flex-col w-[100%]  gap-12 my-8 ">
      <div>
        <h3 className="text-center font-semibold my-2">Cover Letter: (letter of motivation)<span className="text-red"> PDF*</span></h3>
        <div className="flex justify-center items-center ">
          <div className="bg-skyBlue flex flex-col justify-center items-center gap-y-1 p-8 border-dashed border-[2px] border-blue rounded-lg">
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1686751581/nHubFoundation/CloudArrowUp_ehadyi.png"
              alt=""
            />
            <p>drag and drop your file</p>
            <p>Or</p>
            <button onClick={handleCoverInput} className="bg-blue py-1 px-3 rounded-md">
              Browse file
            </button>
            <p>
              {formData.cover.name}
            </p>
          </div>
          <input
            name="userfile"
            type="file"
            ref={coverInput}
            value={cover}
            className="hidden"
            onChange={(e) =>
              setFormData({ ...formData, cover: e.target.files[0]})
            }
          />
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold my-2">IT Letter<span className="text-red"> PDF*</span></h3>
        <div className="flex justify-center items-center ">
          <div className="bg-skyBlue flex flex-col justify-center items-center gap-y-1 p-8 border-dashed border-[2px] border-blue rounded-lg">
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1686751581/nHubFoundation/CloudArrowUp_ehadyi.png"
              alt=""
            />
            <p>drag and drop your file</p>
            <p>Or</p>
            <button onClick={handleCoverInput2} className="bg-blue py-1 px-3 rounded-md">
              Browse file
            </button>
            <p>
              {formData.it.name}
            </p>
          </div>
          <input
            name="userfile"
            type="file"
            ref={coverInput2}
            value={input}
            className="hidden"
            onChange={(e) =>
              setFormData({ ...formData, it: e.target.files[0]})
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
