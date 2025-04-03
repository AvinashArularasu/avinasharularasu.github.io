import { createContext, useContext, useEffect, useState } from "react"

// Create Context
const AppCtx = createContext(null)

// Assigning App Context 
export function AppContext({children}) {
    const [theme, setTheme] = useState("light")
    const [changeCol, setChangeCol] = useState("")
    const [LoadingTrue, setLoadingTrue] = useState(true);

    const [colorTheme, setColorTheme] = useState("teal");
    const [ShadowColorTheme, setShadowColorTheme] = useState("#2dd4bf")
    const [bgColorTheme, setBgColorTheme] = useState("#2dd4bf")
    const [bgHoverColorTheme, setBgHoverColorTheme] = useState("#2dd4bf")
    const [borderColorTheme, setBorderColorTheme] = useState("#2dd4bf")
    const [outlineColorTheme, setOutlineColorTheme] = useState("#2dd4bf")
    const [bgGradFromColorTheme, setBgGradFromColorTheme] = useState("#2dd4bf")
    const [bgGradToColorTheme, setBgGradToColorTheme] = useState("#115e59")

    useEffect(() => {
        switch (colorTheme) {
            case "teal":
                setShadowColorTheme("#2dd4bf");
                setBgColorTheme("#2dd4bf");
                setBgHoverColorTheme("#115e59");
                setBgGradFromColorTheme("#2dd4bf");
                setBgGradToColorTheme("#115e59");
                setOutlineColorTheme("#2dd4bf");
                setBorderColorTheme("#115e59");
                break;
            case "brown":
                setShadowColorTheme("#fbbf24");
                setBgColorTheme("#fbbf24");
                setBgHoverColorTheme("#92400e");
                setBgGradFromColorTheme("#fbbf24");
                setBgGradToColorTheme("#92400e");
                setOutlineColorTheme("#fbbf24");
                setBorderColorTheme("#92400e");
                break;
            case "red":
                setShadowColorTheme("#f87171");
                setBgColorTheme("#f87171");
                setBgHoverColorTheme("#991b1b");
                setBgGradFromColorTheme("#f87171");
                setBgGradToColorTheme("#991b1b");
                setOutlineColorTheme("#f87171");
                setBorderColorTheme("#991b1b");
                break;    
            case "purple":
                setShadowColorTheme("#c084fc");
                setBgColorTheme("#c084fc");
                setBgHoverColorTheme("#6b21a8");
                setBgGradFromColorTheme("#c084fc");
                setBgGradToColorTheme("#6b21a8");
                setOutlineColorTheme("#c084fc");
                setBorderColorTheme("#6b21a8");
                break;    
            case "pink":
                setShadowColorTheme("#f472b6");
                setBgColorTheme("#f472b6");
                setBgHoverColorTheme("#9d174d");
                setBgGradFromColorTheme("#f472b6");
                setBgGradToColorTheme("#9d174d");
                setOutlineColorTheme("#f472b6");
                setBorderColorTheme("#9d174d");
                break;      
            case "lime":
                setShadowColorTheme("#a3e635");
                setBgColorTheme("#a3e635");
                setBgHoverColorTheme("#3f6212");
                setBgGradFromColorTheme("#a3e635");
                setBgGradToColorTheme("#3f6212");
                setOutlineColorTheme("#a3e635");
                setBorderColorTheme("#3f6212");
                break; 
            default:
                break;
        };
    }, [colorTheme]);

    return (
        <AppCtx.Provider value={{
            theme, setTheme,
            colorTheme, setColorTheme,
            ShadowColorTheme, setShadowColorTheme,
            changeCol, setChangeCol, 
            LoadingTrue, setLoadingTrue,
            bgColorTheme, setBgColorTheme,
            bgHoverColorTheme, setBgHoverColorTheme,
            bgGradFromColorTheme, setBgGradFromColorTheme,
            bgGradToColorTheme, setBgGradToColorTheme,
            outlineColorTheme, setOutlineColorTheme,
            borderColorTheme, setBorderColorTheme

        }}
        >
            {children}
        </AppCtx.Provider>
    )
}

// Use Context function for easy import
export function UseAppContext () {
    return useContext(AppCtx)
}