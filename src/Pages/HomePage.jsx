import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { Welcome } from "../Components/Welcome";
import { Menubar } from "../Components/Menubar";
import { Projects } from "../Components/Projects";
import { Footer } from "../Components/Footer";
import { Skills } from "../Components/Skills";
import { useEffect, useRef, useState } from "react";

export function HomePage() {

    const projRef = useRef(null);
    const [showProjClass, setShowProjClass] = useState(false);

    const callbackFunction = (entries) => {
        // const [entry] = entries;
        // setIsVisible(entry.isIntersecting)
        // console.log("entries",entries)
        entries.forEach((entry) => {
            // console.log("ent", entry)
            // console.log("welcome", welcomeRef.current.childNodes[0].id, aboutRef.current.childNodes[0].id, projRef.current.childNodes[0].id )
            if(entry.isIntersecting) {
                if(projRef.current) setShowProjClass(true);
                // if(projRef.current.childNodes[0].id == "projects") setShowProjClass(true);
                // containerRef.current.classList.add("show")
            } else {
                setShowProjClass(false);
                // containerRef.current.classList.remove("show")
            }
        })
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {

        const projectobserver = new IntersectionObserver(callbackFunction, options);
        if (projRef.current) projectobserver.observe(projRef.current)
        return () => {
            if (projRef.current) projectobserver.unobserve(projRef.current)
        }
        
    }, [projRef, options])

    return (
        <>
            <div></div>
            <Menubar />
            <Welcome />
            <About>
                <Skills />
            </About>
            {/* <div ref={projRef} className={`${showProjClass? "show": "hide"}`}> */}
                <Projects />
            {/* </div> */}
            <Contact />
            <Footer />
        </>
    )
}