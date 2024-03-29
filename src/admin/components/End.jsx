import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
import { useEffect, useState, useCallback, useContext } from "react";
import Details from "./Details";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import { obscureEmail } from "../../customMethods";
import { format } from "date-fns";

const End = () => {
    const { setDetail } = useContext(ActiveContext)

    const [allEnded, setAllEnded] = useState(() => {
        const Finished = localStorage.getItem('isFinished')
      return Finished ? JSON.parse(Finished) : []
    })
    const [details, setDetails] = useState(false);


    const getAll = useCallback(async () => {
        const res = await getAllIntern('isFinished', true)
        if (res?.status === 200 || res?.status === 201) {
            localStorage.setItem('isFinished',JSON.stringify(res.data.data))
            return setAllEnded(res.data.data)
        } else {
            console.log(res)
        }
    }, [setAllEnded]);

    useEffect(() => {
        getAll()
    }, [getAll])

    const handleDetails = (item) => {
        setDetail(item)
        setDetails(!details)
    }

    const handleNameSearch = (elem) => {
        const searchString = elem.target.value
        const filteredResults = allEnded.filter(
          (item) =>
            item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
            item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
            item.email.toLowerCase().includes(searchString.toLowerCase())
        );
        setAllEnded(filteredResults);
      }
    return (
        <>
            {details ? <Details handleDetails={handleDetails} /> : ""}
            
            <AdminNav heading="Ended Applications" />
            <div>
                <div className="hidden md:block">
                    <AdminHeader
                        heading="Ended Applications"
                        text="All ended applications"
                    />
                </div>
                <AppHeader total={allEnded.length} handleNameSearch={handleNameSearch}/>
                <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
                    {allEnded.length > 0 ? allEnded.map((pend, i) => {
                        return (
                            <div key={i} className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg">
                                <div>
                                    <h5>{pend.first_name} {pend.last_name}</h5>
                                    <p>
                                    {obscureEmail(pend.email.toLowerCase())}
                                    </p>
                                </div>
                                <div>
                                    <div className='flex justify-center items-center gap-3'>
                                        <div onClick={() => handleDetails(pend)} className='cursor-pointer'>
                                            <img
                                                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                                                alt=""
                                            />
                                        </div>
                    
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className="flex justify-center md:hidden">
                        <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
                            <p>No Ended Applications</p>
                        </div>
                    </div>}

                </div>
                <div className="hidden md:block">
                    <table className="table-auto mx-auto text-sm mt-10 w-[95%] overflow-auto ">
                        <thead>
                            <tr>
                                <th className="py-3 text-left font">Details</th>
                                <th className="py-3 text-left">Email</th>
                                <th className="py-3 text-left">Phone</th>
                                <th className="py-3 text-left">Start</th>
                                <th className="py-3 text-left">End</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {allEnded.length > 0 ? allEnded.map((pend, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="py-2">
                                            <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7" onClick={() => handleDetails(pend)} >
                                                <img
                                                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                                                    alt=""
                                                />
                                                {pend.first_name} {pend.last_name}
                                            </button>
                                        </td>
                                        <td className="py-3 text-left text-orange">
                                            {obscureEmail(pend.email.toLowerCase())}
                                        </td>
                                        <td className="py-3 text-left">{pend.phone}</td>
                                        <td className="py-3 text-left">{format(pend.start_date, 'MMMM do, yyyy')}</td>
                                        <td className="py-3 text-left">{format(pend.end_date, 'MMMM do, yyyy')}</td>
                                        
                                    </tr>
                                )
                            }) : <div className='mt-16 w-full'>
                                <div className="hidden md:block lg:flex justify-center items-center">
                                    <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                                        <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                                            <p>No Ended Application</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
 
export default End;