import { useEffect, useRef, useState } from "react"

const StartedDropdown = ({ handleEndModal }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggle = () => {
        setOpen(!open)
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);
    
    return (
        <>
            <div className="relative">

                <div ref={dropdownRef} className="bg-white w-10 h-9 mx-auto shadow-lg flex justify-center items-center " onClick={toggle}><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg" alt="" /></div>
                {open && <div className="bg-white w-28 mx-auto shadow-lg flex flex-col justify-center px-3 p-2 gap-y-2 rounded-md absolute top-12 right-0 z-40">
                    <p onClick={() => { handleEndModal(), toggle() }} className="text-btnRed cursor-pointer">Mark As End</p>
                </div>}
            </div>
        </>
    )
}

export default StartedDropdown