import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../Context/AppContext";

export function Resume() {
  const {
      bgGradFromColorTheme,
      bgGradToColorTheme,
  } = UseAppContext();
  const navigate = useNavigate();
  return (
    <>
      <div 
      style={ {backgroundImage: `linear-gradient(180deg, ${bgGradFromColorTheme}, ${bgGradToColorTheme})`} }        
      className="flex flex-row justify-center items-center w-full z-40 h-12 text-white text-xl font-semibold sticky top-0 left-0 right-0">
          <a 
              className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 cursor-pointer" 
              onClick={() => {navigate("/")}}
              href="#home"
          >
              &larr;GoBack
          </a>
      </div>
      <h1 className="min-h-screen flex justify-center items-center text-2xl">Coming Soon</h1>
    </>
  )
} 