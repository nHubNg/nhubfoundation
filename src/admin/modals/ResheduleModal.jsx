import { useState, useContext } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { rescheduleRequest } from "../../helpers/admin";

const RescheduleModal = ({ handleRescheduleModal }) => {
  const { detail } = useContext(ActiveContext);
  const [formData, setFormData] = useState({
    interviewDate: '',
    interviewTime: '',
  });

  const updateSchedule = async (e) => {
    e.preventDefault();
    const { interviewDate, interviewTime } = formData;
    console.log(interviewDate);
    console.log(interviewTime);

    // Rest of your logic using interviewDate value
    const res = await rescheduleRequest(detail, formData);
    // ...

    // handleRescheduleModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center "></div>
      <div className="fixed inset-0 bg-gray-800 bg-overlay flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-8 w-full md:w-96">
          <h2 className="text-2xl font-medium mb-4">New Schedule Date</h2>
          <form onSubmit={updateSchedule}>
            <div className="mb-4">
              <label htmlFor="interviewDate" className="block mb-1">
                Interview Date
              </label>
              <input
                id="interviewDate"
                name="interviewDate"
                type="date"
                value={formData.interviewDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="interviewTime" className="block mb-1">
                Interview Time
              </label>
              <input
                id="interviewTime"
                name="interviewTime"
                type="time"
                value={formData.interviewTime}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Reschedule
              </button>
              <button
                type="button"
                onClick={handleRescheduleModal}
                className="bg-red text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
