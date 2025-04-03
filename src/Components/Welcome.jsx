import React, { useEffect, useRef, useState } from "react";
import { UseAppContext } from "../Context/AppContext";
// import imgProfilePhoto from "../assets/img/welcome/Avinash-ProfilePhoto.jpg";

// Welcome View
export function Welcome() {
    const [showClass, setShowClass] = useState(false);
    const {
        bgColorTheme,
        bgHoverColorTheme,
        borderColorTheme } = UseAppContext();

    useEffect(() =>{
        setShowClass(true)
    }, [])


    return (
        <div id="welcome"  className={`${showClass? "show": "hide"} min-h-screen w-full flex flex-col justify-around items-center text-white pt-16 p-5 md:px-32 bgImgWelcome`} >    
            <div className="w-full flex flex-col justify-center gap-10 lg:flex-row" >
                <div className="w-full lg:w-2/4 flex flex-col justify-center items-center gap-10">
                    <div className="text-2xl font-semibold text-center">
                        <div className="space-y-4">
                            <p className="text-4xl">Welcome!</p>
                            <p className="">Myself Avinash Arularasu</p>
                            <p className="">{} Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="">
                        <a href="https://drive.google.com/file/d/1ltTSlwuqROBw5zYsjAd4LrVOMXIV1BA4/view?usp=drive_link" target="_blank">
                            <button 
                            onMouseEnter={(e) => {e.target.style.backgroundColor = bgHoverColorTheme, e.target.style.color = "white"}}
                            onMouseLeave={(e) => {e.target.style.backgroundColor = bgColorTheme, e.target.style.color = "black"}}
                            style={ {backgroundColor: bgColorTheme, hover:bgHoverColorTheme} }
                            className={`px-6 py-2 text-black rounded-xl btn hover:scale-110 ease-in-out transition-all duration-300`}
                            >
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                {/* <div className="w-full lg:w-2/4 p-5  flex flex-col justify-center items-center gap-10">
                    <img 
                        className="p-2 rounded-full shadow-lg border-2 border-${colorTheme}-400 outline-${colorTheme}-600 dark:outline-${colorTheme}-600 outline-dashed outline-2 outline-offset-4 shadow-[inset_0px_0px_30px_3px_#2dd4bf]" 
                        src={imgProfilePhoto} 
                        alt="ProfilePhoto" 
                    />
                </div> */}
            </div>
            <div className="w-full flex flex-col justify-end" >
                <a href="#about"> 
                    <div className="-z-1  relative rounded-xl overflow-auto p-8">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <span className="text-xl font-semibold">Know More</span>
                            <div 
                                style={ {borderColor: borderColorTheme} }
                                className={`animate-bounce border-4 bg-white dark:bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 rounded-full flex items-center justify-center`}>
                                    <svg 
                                    style={ {color: borderColorTheme} }
                                    className={`w-6 h-6`} fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
};
