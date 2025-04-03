import { useEffect, useState } from "react";

// Project Detail Card Layout Component
export function ProjectDetailCard(props) {
    const [showClass, setShowClass] = useState(false);

    useEffect(() =>{
        setShowClass(true)
    }, [])

    return (
        <div className={`${showClass? "show": "hide"} flex flex-col gap-5 mt-12 mb-12 px-5 md:px-32`}>
            {/* <h2 className="text-2xl shadow p-2 text-center bg-opacity-75 page-header font-semibold uppercase underline"> */}
            <h2  className="text-2xl text-center font-semibold uppercase underline">
                <a 
                    href={`${props.url}`}
                    target="_blank"
                    className="text-blue-400 underline"
                >
                    {props.title}
                </a>
            </h2>
            <div className="">
                <span className="text-lg text-teal-400 font-semibold underline">Sub:</span>
                <div className="pl-4">{props.sub}</div>
            </div>
            <div>
                <div className="border shadow inline-block float-right ">
                    {props.demovideo}
                </div>
                <ul className="list-none list-inside">
                    <li>
                        <span className="text-lg text-teal-400 font-semibold underline">Features -&gt;</span>
                        <div className="pl-4">{props.children}</div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col flex-nowrap gap-2"> 
                <span className="text-lg text-teal-400 font-semibold underline">Implemented Using -&gt; </span>
                <div className="pl-4 flex flex-col flex-nowrap gap-4 md:flex-row">
                    <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-10">
                        {props.implementlist}
                    </ul>
                </div>
            </div>
            <div className="text-lg text-start font-semibold uppercase underline">
                <a 
                    href={`${props.url}`} 
                    target="_blank"
                    className="text-blue-400 underline"
                >
                    Have a lookout - Click to View
                </a>
            </div>
            <div className="text-lg text-start font-semibold uppercase underline">
                <a 
                    href={`${props.giturlfrontend}`} 
                    target="_blank"
                    className="text-blue-400 underline"
                >
                    GitHub-Frontend - Click to View
                </a>
            </div>
            <div className="text-lg text-start font-semibold uppercase underline">
                <a 
                    href={`${props.giturlbackend}`} 
                    target="_blank"
                    className="text-blue-400 underline"
                >
                    GitHub-Backend - Click to View
                </a>
            </div>
        </div>
    )
};
