import { ActiveContext } from "../../contexts/ActiveContext"
import { acceptRequest, editRequest } from "../../helpers/admin"
import { useContext } from "react"

const AcceptModal = ({handleAcceptModal}) => {
  const { detail } = useContext(ActiveContext)
  console.log(detail)

  const acceptApp = async () => {
    const res = await acceptRequest(detail)
    if (res?.status === 200 || res?.status === 201) {
      const resp = await editRequest(detail, { "isApproved": "approved" })
      if (resp?.status === 200 || resp?.status === 201) {
        window.location.reload(false);
        handleAcceptModal()
        return
      }
      return
    } else {
      console.log(res)
    }
  }
  return (
    <div>
    <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
      <div className="bg-white  mx-auto rounded-lg h-[35%]  w-[75%] md:w-[30%] flex flex-col gap-y-10 justify-center  text-center text-[20px] font-medium">
      Are you sure you want to accept this application?
      <div className="flex justify-center text-white gap-5">
            <button className="bg-btnGreen py-2 px-10 rounded-lg"  onClick={acceptApp}>Yes</button>
        <button onClick={handleAcceptModal} className="bg-btnRed py-2 px-10 rounded-lg">No</button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default AcceptModal
