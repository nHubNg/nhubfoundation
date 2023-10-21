import { createContext, useState } from "react";

export const FormContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function FormProvider({ children }) {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        interview: "",
        gender: "",
        school: "",
        department: "",
        course: "",
        regNo: "",
        startDate: "",
        endDate: "",
        experience: "",
        track: "",
        duration: "",
        cover: {},
        it: {},
    });


    return <FormContext.Provider value={{ formData, setFormData }}
    >{children}</FormContext.Provider>;
}