import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { UseAppContext } from "../Context/AppContext";

// Skill List
export function Skills() {
    const {theme, setTheme,colorTheme, setColorTheme,
        bgColorTheme,
        bgHoverColorTheme,
        bgGradFromColorTheme,
        bgGradToColorTheme,
        outlineColorTheme,
        borderColorTheme, 
        ShadowColorTheme
    } = UseAppContext();
    return (
        <div 
        style={ {boxShadow: `0px 0px 5px inset ${ShadowColorTheme}`} }
        id="skills" className="w-full flex flex-col space-y-5 bg-gradient-to-r from-base-200 to-base-100 pt-16 px-16 pb-10 md:px-16">
            <h3 className="mb-5 text-3xl font-semibold text-center">Skills</h3>
            <div className="w-full ">
                <h2 className="text-sm font-semibold">Programming:</h2>
                <ul className="w-full p-5 flex flex-col items-start content-start gap-4 list-disc lg:flex-row flex-wrap lg:gap-10">
                    <li className="flex flex-row justify-center items-center"><RiHtml5Fill /><span>HTML5</span></li>
                    <li className="flex flex-row justify-center items-center"><RiCss3Fill /><span>CSS3</span></li>
                    <li className="flex flex-row justify-center items-center"><RiJavascriptFill /><span>JavaScript</span></li>
                    <li className="flex flex-row justify-center items-center"><RiReactjsFill /><span>Reactjs</span></li>
                    <li className="flex flex-row justify-center items-center"><RiNodejsFill /><span>Nodejs</span></li>
                    <li className="flex flex-row justify-center items-center">
                        <div>
                            <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width={15} height={15}/>
                        </div>
                        <span>Expressjs</span>
                    </li>
                    <li className="flex flex-row justify-center items-center">
                        <div>
                            <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" width={15} height={15}/>
                        </div>
                        <span>mongoDB</span>
                    </li>
                    <li className="flex flex-row justify-center items-center">
                        <div>
                            <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" width={15} height={15}/>
                        </div>
                        <span>SQL</span>
                    </li>
                    <li className="flex flex-row justify-center items-center">
                        <div>
                            <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" width={15} height={15}/>
                        </div>
                        <span>Python-Basics</span>
                    </li>
                    <li className="flex flex-row justify-center items-center">
                        <div>
                            <img src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" width={15} height={15}/>
                        </div>
                        <span>jQuery-basics</span>
                    </li>
                </ul>
            </div>
            <div className="w-full">
                <h2 className="text-sm font-semibold">TypeWriting: </h2>
                <ul className="w-full flex flex-col gap-4 list-disc lg:flex-row lg:gap-10">
                    <li>JuniorGrade - Passed in FirstClass with Distiction</li>
                </ul>
            </div>
            <div className="">
                <h2 className="text-sm font-semibold">Electrical: </h2>
                <ul className="w-full flex flex-col gap-4 list-disc lg:flex-row lg:gap-10">
                    <li>HouseWiring</li>
                </ul>
            </div>
            <div className="flex flex-row justify-center">
                <a href="#contact">
                    <button 
                    onMouseEnter={(e) => {e.target.style.backgroundColor = bgHoverColorTheme, e.target.style.color = "white"}}
                    onMouseLeave={(e) => {e.target.style.backgroundColor = bgColorTheme, e.target.style.color = "black"}}
                    style={ {backgroundColor: bgColorTheme, hover:bgHoverColorTheme} }
                    className="px-6 py-2 text-black rounded-xl btn  hover:scale-110 ease-in-out transition-all duration-300"
                    >Hire
                    </button>
                </a>
            </div>
        </div>
    )
};
