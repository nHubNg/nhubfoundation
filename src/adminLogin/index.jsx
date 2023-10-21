import { useContext, useState } from "react"
import { signIn } from "../helpers/admin"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
import { ActiveContext } from "../contexts/ActiveContext";

export const AdminLogin = () => {
    const {setActiveState} = useContext(ActiveContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading('')
        if (email === '' || password === '') {
            return setErr(true)
        } else {
            setLoading('Loading...')
            const res = await signIn(email, password)
            setLoading('')
            if (res?.data.statusCode === 200 || res?.data.statusCode === 201) {
                Cookies.set('status', res.data.data.token, { expires: 1 });
                setActiveState(true)
                navigate('/admin')
                return res
            } else {
                setLoading('')
                console.log(res)
                setError(res.data.message)
            }
        }
    }

    return (<>
        <form className="grid grid-cols-1 md:grid-cols-1 gap-6 text-textAsh mx-[100px] mt-[100px] w-[50%]">
            <div className="pb-4">
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
            <div className="pb-4">
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
            <p className='pt-2 text-[14px] text-center'>{loading}</p>
            <button
                className=" py-2 px-6 mt-2 md:mt-0 md:px-9 bg-orange text-white rounded-md"
                onClick={handleLogin}
            >
                Login
            </button>
            <p className='pt-2 text-red text-[14px] text-center'>{error}</p>
        </form>

    </>)
}