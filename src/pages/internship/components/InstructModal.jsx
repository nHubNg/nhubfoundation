import { useState } from "react"


export const InstructModal=({ isOpen, onClose, children })=>{
    // const [openModal,setOpenModal,closeModal] = useState(false);
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white p-6 rounded shadow-lg z-50">
                {children}
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>
                Close
                </button>
            </div>
    </div>
    )
}