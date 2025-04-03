// About Section
export function About({children}) {
    return (
        <div id="about" className="w-full pb-10 min-h-screen bg-gradient-to-r from-base-100 to-base-200 pt-16 px-5 md:px-32">
            <h3 className="text-4xl font-semibold text-center">About</h3>
            <div className="text-lg">
                <br />
                <p>
                Myself Avinash, Thanks for viewing my profile.  
                <br />
                I was in the IT Services and Consulting company in which I have been in the Customer Support and Marketing Division where I gainded excellent customer centric experiences 
                <a href="https://drive.google.com/file/d/1ltTSlwuqROBw5zYsjAd4LrVOMXIV1BA4/view?usp=drive_link" target="_blank">
                    <button className="px-4 underline text-blue-400 hover:scale-110 ease-in-out transition-all duration-300">
                        View My Resume
                    </button>
                </a>
                 and Now moving forward in the Development Sector.
                <br />
                </p>
                <br />
                <p>
                    I'm passionate about writing clean, efficient, and maintainable code following best practices and coding standards.
                </p>
                <br />
                <p>
                    I'm particularly interested in opportunities 
                    that allow me to further develop my expertise in full-stack development 
                    and work on projects that challenge me to grow as a developer. 
                </p>
                <br />
                <p>
                    Also I'm eager to contribute my skills and drive innovation in fullstack development. 
                    <br />
                    Let's connect to explore opportunities where I can leverage my technical expertise 
                    to create impactful web experiences!
                </p>
                <br />
            </div>
            {children}
        </div>
    )
};
