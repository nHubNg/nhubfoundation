import { useContext, useState, useRef } from "react"
import { signIn } from "../helpers/admin"
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
import { ActiveContext } from "../contexts/ActiveContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminLogin = () => {
    const ref = useRef(null) //Ref for network loading bar
    const { setActiveState } = useContext(ActiveContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        // setLoading('')
        if (email === '' || password === '') {
            return setErr(true)
        } else {
            // Start Loading Indicator
            ref.current.continuousStart();

            const res = await signIn(email, password)
            try {
                

                console.log(res?.data.statusCode)
                if (res?.data.statusCode === 200 || res?.data.statusCode === 201) {
                    Cookies.set('status', res.data.data.token, { expires: 2 });
                    setActiveState(true)

                    splashNotify(res.data.message, 'SUCCESS');
                    ref.current.complete();

                    // Since splash message takes 5secs to close, lets delay moving to the admin dashboard until this modal is closed
                    setInterval(() => {
                        navigate('/admin')
                    }, 5000);

                    return res
                }
                else {
                    ref.current.complete();
            
                    console.log('authentication error')
                    console.log(res.data.message)
                    splashNotify(res.data.message, 'ERROR');
                }
            }
            catch (error) {
                console.log(error)
                ref.current.complete();
              
                console.log(res.message)
                splashNotify(res.message, 'ERROR');
                // }
            }


        }






    }

    const splashNotify = (msg, type) => {
        const splashConfig = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }

        switch (type.toUpperCase()) {
            case 'ERROR':
                toast.error(capitalizeFirstLetter(msg), splashConfig);
                break;
            case 'SUCCESS':
                toast.success(capitalizeFirstLetter(msg), splashConfig);
                break;
            case 'WARNING':
                toast.warn(capitalizeFirstLetter(msg), splashConfig);
                break;
            case 'INFO':
                toast.info(capitalizeFirstLetter(msg), splashConfig);
                break;
            default:
                toast(capitalizeFirstLetter(msg), splashConfig);
                break;
        }

    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (<div className='flex flex-col justify-center items-center'>
        <LoadingBar color='#f11946' ref={ref} />
        <ToastContainer />

        <form className="flex justify-center lg:items-center items-start mx-[40px] flex-col gap-6 text-textAsh mt-[100px] w-[60%] lg:w-[30%] shadow-lg p-4 border-black">
            <div className="mx-auto lg:mx-0"><a href="/"><img src="/src/assets/logo.png" alt="" /></a></div>
            <h1 className="grid grid-cols-3 items-center gap-2 text-center w-full uppercase px-4 mb-6">
                <hr className="border-slate-300" />
                Admin Login
                <hr className="border-slate-300" />
            </h1>
            <div className="pb-4 w-full">
                <label>
                    Email<span className="text-red">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
                />
                {err && email === '' ? (<p className='pt-2 text-red text-[12px]'>Please enter email</p>) : ''}
            </div>
            <div className="pb-4 w-full">
                <label>
                    Password<span className="text-red">*</span>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
                />
                {err && password === '' ? (<p className='pt-2 text-red text-[12px]'>Please enter password</p>) : ''}
            </div>
            <p className='pt-2 text-[14px] w-full text-center'>{loading}</p>
            <button
                className="w-full py-2 px-6 mt-2 md:mt-0 md:px-9 bg-orange text-white rounded-md"
                onClick={handleLogin}
            >
                Login
            </button>
            <p className='pt-2 text-red text-[14px] text-center'>{error}</p>
        </form>

    </div>)
}