import { useFormik } from "formik";
import { contactSchema } from "../Schemas/contact";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { UseAppContext } from "../Context/AppContext";
import { baseurl, userurl } from "../Handlers/BackendUrls";
import { useState } from "react";

// Contact Section
export function Contact() {
    const {theme,setTheme,colorTheme, setColorTheme,
        bgColorTheme,
        bgHoverColorTheme,
        bgGradFromColorTheme,
        bgGradToColorTheme,
        outlineColorTheme,
        borderColorTheme,ShadowColorTheme } = UseAppContext();
    const [successMessage, setSuccessMessage] = useState("");
    const [failureMessage, setFailureMessage] = useState("");
    const [successEmailMessage, setSuccessEmailMessage] = useState("");
    const [failureEmailMessage, setFailureEmailMessage] = useState("");
    const [Loading, setLoading] = useState(false);

    const initVal = {
        userName: "",
        email: "",
        message: ""
    };

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors
    } = useFormik({
        initialValues: initVal,
        validationSchema: contactSchema,
        onSubmit: (values, {resetForm}) => {
            handleContactSubmit(values);
            resetForm({values: ""});
        }
    });

    // Handling Contact Submit Button Payload
    async function handleContactSubmit(messagePayload) {
        // console.log(messagePayload);
        setLoading(true);
        const res = await fetch(`${baseurl}/${userurl}/usermessage/new`, {
            method: "POST",
            body: JSON.stringify(messagePayload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        // console.log(data);
        if (data.error) {
            setSuccessMessage("");
            setSuccessEmailMessage("");
            setFailureMessage(data.error);
            setTimeout(()=> {
                setFailureMessage("");
            },15000)
        } else {
            setLoading(false)
            alert("Messaged Successfully");
            setSuccessMessage(data.message);
            setSuccessEmailMessage(data.email);
            setFailureMessage("");
            setFailureEmailMessage("");
            setTimeout(()=> {
                setSuccessMessage("");
                setSuccessEmailMessage("");
            },60000)
        }
    };

    return (
        <div id="contact" className="min-h-screen flex flex-col justify-center items-center gap-4 bg-white tracking-wide pt-16 px-5 md:px-32 bgImgContact">
            <div className="w-full flex flex-col justify-center items-center gap-2 rounded-xl lg:flex-row">
                <form className={`${theme=="dark" ? "bg-gray-800" : "bg-gradient-to-b from-base-200 to-slate-400"} w-full flex flex-col gap-2 p-5 lg:w-2/4 rounded-xl`} onSubmit={handleSubmit}>
                    <h3 className="text-4xl font-semibold text-center">Contact me</h3>
                    <div className="flex flex-col">
                        <label for="name">Your Name</label>
                        <input
                            required
                            type="text" 
                            id="userName" 
                            onMouseEnter={(e) => {e.target.style.boxShadow = `0px 0px 5px 3px ${ShadowColorTheme}`}}
                            onMouseLeave={(e) => {e.target.style.boxShadow = `0px 0px 0px`}}
                            onFocus={(e) => {e.target.style.boxShadow = `0px 0px 5px 3px inset ${ShadowColorTheme}`}}
                            className="p-2 rounded-lg border-2 hover:outline-none focus:outline-none" 
                            value={values.userName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {
                            touched.userName && errors.userName ?
                            (<div className="pl-2 text-error">{errors.userName}</div>)
                            :
                            ("")
                        }
                    </div>
                    <div className="flex flex-col">
                        <label for="email">Your Email</label>
                        <input 
                            required
                            type="email" 
                            id="email"  
                            onMouseEnter={(e) => {e.target.style.boxShadow = `0px 0px 5px 3px ${ShadowColorTheme}`}}
                            onMouseLeave={(e) => {e.target.style.boxShadow = `0px 0px 0px`}}
                            onFocus={(e) => {e.target.style.boxShadow = `0px 0px 5px 3px inset ${ShadowColorTheme}`}}
                            className="p-2 rounded-lg border-2 hover:outline-none focus:outline-none" 
                            value={values.email} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {
                            touched.email && errors.email ?
                            (<div className="text-error">{errors.email}</div>)
                            :
                            ("")
                        }
                    </div>
                    <div className="flex flex-col">
                        <label for="message">Message</label>
                        <textarea 
                            required
                            type="text" 
                            id="message" 
                            onMouseEnter={(e) => {e.target.style.boxShadow = `0px 0px 5px 3px ${ShadowColorTheme}`}}
                            onMouseLeave={(e) => {e.target.style.boxShadow = `0px 0px 0px`}}
                            onFocus={(e) => {e.target.style.boxShadow = `0px 0px 5px 3px inset ${ShadowColorTheme}`}}
                            className="p-2 rounded-lg border-2 hover:outline-none focus:outline-none" 
                            value={values.message} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={5}
                            cols={24}
                        ></textarea>
                        {
                            touched.message && errors.message ?
                            (<div className="text-error">{errors.message}</div>)
                            :
                            ("")
                        }
                    </div>
                    <div className="flex flex-row justify-center">
                        <button type="submit" 
                         onMouseEnter={(e) => {e.target.style.backgroundColor = bgHoverColorTheme, e.target.style.color = "white"}}
                         onMouseLeave={(e) => {e.target.style.backgroundColor = bgColorTheme, e.target.style.color = "black"}}
                         style={ {backgroundColor: bgColorTheme } }
                         className="px-6 btn text-black">
                            Send
                        </button>
                    </div>
                    <div>
                        { Loading && <div className="text-white text-2xl font-semibold text-center">
                            Messaging ...
                        </div>
                        }
                    </div>
                    {
                        successMessage ?
                        (<div className="text-white text-2xl font-semibold text-center">{successMessage}</div>):("")
                    }
                    {
                        failureMessage ?
                        (<div className="text-error  text-center">{failureMessage}</div>):("")
                    }
                    {
                        successEmailMessage ?
                        (<div className="text-white text-2xl font-semibold text-center">{successEmailMessage}</div>):("")
                    }
                    {
                        failureEmailMessage ?
                        (<div className="text-error  text-center">{failureEmailMessage}</div>):("")
                    }            
                </form>
                <div className="w-full flex flex-col justify-center items-center gap-4 text-white p-5 lg:w-2/4 rounded-xl">
                    <h2 className="text-2xl font-semibold">Contact Details</h2>
                    <div className="flex flex-col gap-4">
                        <p className="flex flex-row justify-start items-center gap-2 text-xl ">
                            <span className="material-symbols-outlined">badge</span>
                            <span>Name : Avinash Arularasu</span>
                        </p>
                        <p className="flex flex-row justify-start items-center gap-2 text-xl hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">contact_mail</span>
                            <a 
                                className="flex flex-row justify-start items-center gap-2 underline decoration-blue-500 decoration-2 bg-transparent text-white hover:text-orange-300"
                                href="mailto:vimalnash@gmail.com"
                            >
                                <span>
                                    Email me @ vimalnash@gmail.com
                                </span>
                            </a>
                        </p>
                        <p className="flex flex-row justify-start items-center gap-2 text-xl bg-transparent text-white hover:text-orange-300 hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer" data-locale="en_US" data-size="medium" data-theme="" data-type="VERTICAL" data-vanity="avinash-arularasu-b6572754" data-version="v1">
                            <a 
                                className="flex flex-row justify-start items-center gap-2 underline decoration-blue-500 decoration-2" 
                                href="https://in.linkedin.com/in/avinash-arularasu-b6572754?trk=profile-badge" 
                                target="_blank"
                            >
                                <span>
                                    <RiLinkedinBoxFill size={20} className="" />
                                </span>
                                <span>
                                    Linkedin : Avinash Arularasu
                                </span>
                            </a>
                        </p>
                        <div className="">
                            <a href="https://drive.google.com/file/d/1ltTSlwuqROBw5zYsjAd4LrVOMXIV1BA4/view?usp=drive_link" target="_blank">
                                <button 
                                onMouseEnter={(e) => {e.target.style.backgroundColor = bgHoverColorTheme, e.target.style.color = "white"}}
                                onMouseLeave={(e) => {e.target.style.backgroundColor = bgColorTheme, e.target.style.color = "black"}}
                                style={ {backgroundColor: bgColorTheme } }
                                className="px-6 py-2 text-black rounded-xl btn hover:scale-110 ease-in-out transition-all duration-300">
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
