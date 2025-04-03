import { UseAppContext } from "../Context/AppContext";

export function Loader() {
    const {theme, setTheme,colorTheme, setColorTheme,
        bgColorTheme,
        bgHoverColorTheme,
        bgGradFromColorTheme,
        bgGradToColorTheme,
        outlineColorTheme,
        borderColorTheme, 
    } = UseAppContext();

    return (
        <div 
        style={ {backgroundImage: `linear-gradient(180deg, ${bgGradFromColorTheme}, ${bgGradToColorTheme})`} }
        className="w-full min-h-screen flex flex-col justify-center items-center gap-6 text-slate-600 opacity-50">
            <h2 className="text-lg font-semibold text-center text-white">
                Loading Please Wait...
            </h2>
            <span class="relative flex h-16 w-16">
                <span 
                style={ {backgroundColor: bgHoverColorTheme} }
                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"></span>
                    <span 
                    style={ {borderColor: borderColorTheme} }
                    class="relative inline-flex justify-center items-center rounded-full h-16 w-16 border-2">
                        <span 
                        style={ {backgroundColor: bgHoverColorTheme} }
                        class="absolute inline-flex rounded-full h-10 w-10">
                        </span>
                    </span>
            </span>
        </div>
    )
};
