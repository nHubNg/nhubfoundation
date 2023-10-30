import { createContext, useState } from "react";
import Cookies from 'js-cookie';


export const ActiveContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function ActiveProvider({ children }) {
    const token = Cookies.get('status')
    const isActive = token ? true : false

    const [activeState, setActiveState] = useState(isActive);
    const [allInterns, setAllInterns] = useState(null)
    const [detail, setDetail] = useState([])


    return <ActiveContext.Provider value={{ activeState, setActiveState, allInterns, setAllInterns, detail, setDetail }}
    >{children}</ActiveContext.Provider>;
}