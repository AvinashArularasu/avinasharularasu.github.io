import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../Context/AppContext";
import { useEffect, useState } from "react";

// Project Card Layout Component for Main Page
export function ProjectCard(props) {
    const {theme, setLoadingTrue, colorTheme,
        bgColorTheme,
        bgHoverColorTheme,
        bgGradFromColorTheme,
        bgGradToColorTheme,
        outlineColorTheme,
        borderColorTheme, 
        ShadowColorTheme
    } = UseAppContext();
    const navigate = useNavigate();

    console.log("colorTheme",colorTheme)

    return (
        <div         
        style={ {borderColor: borderColorTheme, boxShadow: `0px 0px 5px 5px ${ShadowColorTheme}`} }
        className={`w-full border-[3px] flex flex-col rounded-xl transition-all ease-in-out duration-300 shadow-xl lg:w-[300px]`}>
            <div className="">
                <h2 className="rounded-t-lg p-2 text-lg uppercase font-semibold text-center border-b-2 border-gray-200 shadow-[inset_0px_0px_5px_3px_#f2f2f2]">
                    {props.projTitle}
                </h2>
            </div>
            <div className="w-full">
                <img 
                className="shadow-[inset_0px_0px_5px_5px_rgb(0,0,0)]" src={props.projImg} alt="ProjectImage" />
            </div>
            <div className={`${theme=="dark" ? "bg-gray-800":"bg-gray-200"} h-full rounded-b-xl flex flex-col justify-between gap-4 p-5 `}>
                <p className="text-md h-32">{props.projShortDesc}</p>
                <div className="flex flex-row justify-center">
                    <button 
                        onMouseEnter={(e) => {e.target.style.backgroundColor = bgHoverColorTheme, e.target.style.color = "white"}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = bgColorTheme, e.target.style.color = "black"}}
                        style={ {backgroundColor: bgColorTheme } }
                        className="px-6 py-2 text-black rounded-xl btn hover:scale-110 ease-in-out transition-all duration-300"
                        onClick={() => { 
                            setLoadingTrue(true); 
                            navigate(`/project/${props.page}`) 
                        } }
                        >View Details
                    </button>
                </div>
            </div>
        </div>
    )
};
