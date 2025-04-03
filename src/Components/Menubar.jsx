import { useState } from "react";
import { UseAppContext } from "../Context/AppContext";
import imgProfilePhoto from "../assets/img/welcome/Avinash-ProfilePhoto.jpg";

export function Menubar() {
    const {theme, setTheme,colorTheme, setColorTheme,
        bgColorTheme,
        bgHoverColorTheme,
        bgGradFromColorTheme,
        bgGradToColorTheme,
        outlineColorTheme,
        borderColorTheme, 
    } = UseAppContext();

    function changeTheme() {
        if (theme=="light") {
            setTheme("dark")
        } else setTheme("light")
    };

    return (
        <div 
        style={ {backgroundImage: `linear-gradient(180deg, ${bgGradFromColorTheme}, ${bgGradToColorTheme})`} }
        className={`navbar z-40 h-6 sticky top-0`}>
        {/* <div className="navbar z-40 h-6 bg-gradient-to-b from-teal-100 to-teal-800 sticky top-0"> */}
        {/* <div className="navbar bg-gradient-to-r from-cyan-200 to-blue-200 sticky top-0"> */}
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a href="#welcome"><span className="text-lg material-symbols-outlined">home</span>Home</a></li>
                    <li><a href="#about"><span className="text-lg material-symbols-outlined">person</span>About</a></li>
                    <li><a href="#projects"><span className="text-lg material-symbols-outlined">style</span>Projects</a></li>
                    <li><a href="#contact"><span className="text-lg material-symbols-outlined">connect_without_contact</span>Contact</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl text-slate-100" href="/">
                    <img src="../Avinash.svg" width="24px" height="24px" />
                    AvinashPortfolio
                </a>
            </div>
            <div className="navbar-center hidden lg:flex text-slate-100">
                <ul className="menu menu-horizontal px-1">
                    <li className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer"><a href="#welcome"><span className="text-lg material-symbols-outlined">home</span>Home</a></li>
                    <li className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer"><a href="#about"><span className="text-lg material-symbols-outlined">person</span>About</a></li>
                    <li className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer"><a href="#projects"><span className="text-lg material-symbols-outlined">style</span>Projects</a></li>
                    <li className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer"><a href="#contact"><span className="text-lg material-symbols-outlined">connect_without_contact</span>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value={theme} onChange={changeTheme}/>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-6 w-6 fill-current text-yellow-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>

                    {/* sun icon */}
                    <svg
                        className="swap-off h-6 w-6 fill-current text-orange-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                </label> 
                <div className="w-10 h-10 flex flex-col justify-center items-center gap-10">
                    <img 
                        className={`rounded-full shadow-lg border-2 outline-2 outline-offset-4 shadow-[inset_0px_0px_30px_3px_#2dd4bf]`}
                        style={ {borderColor: borderColorTheme, outlineColor: outlineColorTheme} }
                        src={imgProfilePhoto} 
                        alt="PP" 
                    />
                </div>
                {/* {
                    theme=="light"?
                    (<a className="" onClick={() => {setTheme("dark")}}><span className="material-symbols-outlined">dark_mode</span></a>)
                    :
                    (<a className="" onClick={() => {setTheme("light")}}><span className="material-symbols-outlined">light_mode</span></a>)
                } */}
                {
                    <div className="flex flex-col">

                        <label className="text-slate-100">ThemeColor</label>
                        <select 
                            value={colorTheme}
                            onChange={(e) => setColorTheme(e.target.value)}
                            className="px-2 rounded-lg"
                        >
                            <option></option>
                            <option value="teal" style={{backgroundColor:"#2dd4bf"}}>GreenTeal<label style={{color: "white"}}></label></option>
                            <option value="lime" style={{backgroundColor:"#a3e635"}}>GreenLime</option>
                            <option value="purple" style={{backgroundColor:"#c084fc"}}>Purple</option>
                            <option value="pink" style={{backgroundColor:"#f472b6"}}>Pink</option>
                            <option value="red" style={{backgroundColor:"#f87171"}}>Red</option>
                            <option value="brown" style={{backgroundColor:"#fbbf24"}}>YellowBrown</option>
                        </select>
                    </div>
                }
         
            </div>
        </div>
    )
}