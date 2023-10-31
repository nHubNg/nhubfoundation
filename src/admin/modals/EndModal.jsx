import { ActiveContext } from "../../contexts/ActiveContext"
import { editRequest } from "../../helpers/admin"
import { useContext } from "react"

const EndModal = ({ handleEndModal }) => {
    const { detail } = useContext(ActiveContext)
    const startApp = async () => {
        const res = await editRequest(detail, { "isFinished": true, "isStarted": false })
        if (res?.status === 200 || res?.status === 201) {
            window.location.reload(false);
            handleEndModal()
            return
        } else {
            console.log(res)
        }
    }

    return (
        <div>
            <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
                <div className="bg-white  mx-auto rounded-lg h-[35%]  w-[75%] md:w-[30%] flex flex-col gap-y-10 justify-center  text-center text-[20px] font-medium">
                    Are you sure you want to mark this applicant as end?
                    <div className="flex justify-center text-white gap-5">
                        <button className="bg-btnGreen py-2 px-10 rounded-lg" onClick={startApp}>Yes</button>
                        <button onClick={handleEndModal} className="bg-btnRed py-2 px-10 rounded-lg">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndModal