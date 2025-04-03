import { useNavigate, useParams } from "react-router-dom";
import { ProjectDetailCard } from "../Layouts/ProjectDetailCard";
import { UseAppContext } from "../Context/AppContext";

// Project Details Page display based on Project clicked
export function ProjectDetail() {
    const projectNameUrlParamObj = useParams();
    const projTitleParam = projectNameUrlParamObj.projDetail;
    const navigate = useNavigate();
    // console.log(projectName)
    const {theme, setTheme,colorTheme, setColorTheme,
        bgColorTheme,
        bgHoverColorTheme,
        bgGradFromColorTheme,
        bgGradToColorTheme,
        outlineColorTheme,
        borderColorTheme, 
    } = UseAppContext();

    return (
        <div>
        <div 
        style={ {backgroundImage: `linear-gradient(180deg, ${bgGradFromColorTheme}, ${bgGradToColorTheme})`} }        
        className="flex flex-row justify-center items-center w-full z-40 h-12 text-white text-xl font-semibold sticky top-0 left-0 right-0">
            <a 
                className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 cursor-pointer" 
                onClick={() => {navigate("/")}}
                href="#projects"
            >
                &larr;GoBack
            </a>
        </div>

        {
            projTitleParam == "weddingwise-eventmanagement" ?
            (
                <ProjectDetailCard
                    title="Event Management"
                    sub="Focussed on Wedding Related Event Management Concept - Complex CRUD Operations and Navigation - Logical Calculations(AmountRegarding) -  Admin, VendorWise, UserWise Login process and Data Management using Authenticaion and Authorization"
                    url="https://weddingwise-em-frontend.netlify.app/"
                    giturlfrontend="https://github.com/Vimalnash/WeddingWise-EM-Frontend"
                    giturlbackend="https://github.com/Vimalnash/WeddingWise-EM-Backend"
                    implementlist={
                        <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                            <li>MongoDB</li>
                            <li>Expressjs</li>
                            <li>Reactjs</li>
                            <li>Nodejs</li>
                            <li>CSS-BootStrap and Custom</li>
                        </ul>
                    }
                >
                <>
                <li>
                    <span className="font-semibold text-teal-400">Authentication Layers Applied</span>
                    
                    <ul className="list-disc list-inside">
                        <table className="table-auto border-collapse border border-slate-400">
                            <thead>
                                <tr>
                                    <th className="p-2 border border-slate-400 text-center text-slate-500">Login</th>
                                    <th className="p-2 border border-slate-400 text-center text-slate-500">Email</th>
                                    <th className="p-2 border border-slate-400 text-center text-slate-500">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="p-2 border border-slate-400 text-slate-400">Admin</th>
                                    <td className="p-2 border border-slate-400">admin@gmail.com</td>
                                    <td className="p-2 border border-slate-400">admin@123</td>
                                </tr>
                                <tr>
                                    <th className="p-2 border border-slate-400 text-slate-400">User</th>
                                    <td className="p-2 border border-slate-400">user@gmail.com</td>
                                    <td className="p-2 border border-slate-400">user@123</td>
                                </tr>
                                <tr>
                                    <th className="p-2 border border-slate-400 text-slate-400">Vendor</th>
                                    <td className="p-2 border border-slate-400">vendor1@gmail.com</td>
                                    <td className="p-2 border border-slate-400">vendor@123</td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                </li>
                <br />
                <li>
                    <span className="font-semibold text-teal-400">Admin WorkAround</span>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-semibold">User Menu - </span>
                            <ul className="list-disc list-inside pl-4">
                                <li>Login Using admin Credentials.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Admin Menu - </span>
                            <ul className="list-disc list-inside pl-4">
                                <li>Event Category    Like Wedding, Reception, PreWedding, etc..</li>
                                <li>Event Services    Photography, Catering, Travel, OverallEventManageLtds, etc...</li>
                            </ul>                                
                        </li>
                    </ul>
                </li>
                <br />
                <li>
                    <span className="font-semibold text-teal-400">Vendor WorkAround (To Update Their Basic Package details)</span>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-semibold">Vendors-BusinessSignup Menu</span>
                            <ul className="list-disc list-inside pl-4">
                                <li>Signup Using New Credentials.</li>
                                <li>Login using already Signedup credentials.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Vendor Menu</span>
                            <ul className="list-disc list-inside pl-4">
                                <li>
                                    <span className="font-semibold">View Main Package DetailsVendor Menu</span>
                                    <ul className="list-disc list-inside pl-4">
                                        <li>Vendor Shall Add 1 Main/Base PackageDetails to display in users vendor dashboard.</li>
                                        <li>Edit any no of times.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">View Payment Terms</span>
                                    <ul className="list-disc list-inside pl-4">
                                        <li>Vendor Shall Add 1 Payment Terms to show users.</li>
                                        <li>Edit any no of times..</li>
                                    </ul>
                                </li>
                            </ul>                                
                        </li>
                    </ul>
                </li>
                <br />
                <li>
                    <span className="font-semibold text-teal-400">User WorkAround (To Plan their events)</span>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-semibold">User Menu</span>
                            <ul className="list-disc list-inside pl-4">
                                <li>Signup Using New Credentials.</li>
                                <li>Login using already Signedup credentials.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">VendorSearch</span>
                            <ul className="list-disc list-inside pl-4">
                                <li>
                                    <span className="font-semibold">Displays Vendor Basic Detail Cards</span>
                                    <ul className="list-disc list-inside pl-4">
                                        <li>Click View Detail to show Detailed View of the Vendor services.</li>
                                        <li>Use "Add to Favourites" and "Remove from Favourites".</li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="list-disc list-inside">
                                <li>
                                    <span className="font-semibold">Plan-Register-Pay</span>
                                    <ul className="list-disc list-inside pl-4">
                                        <li>
                                            <span className="font-semibold">My Favourite Vendors </span>
                                            <ul className="list-disc list-inside pl-4">
                                                <li>Displays Vendor Cards Which added to your Favourites.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Event Plan Main Details  </span>
                                            <ul className="list-disc list-inside pl-4">
                                                <li>Form To Input Main Event Plan Details.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Dashbord - Event Plan </span>
                                            <ul className="list-disc list-inside pl-4">
                                                <li>Displays Main Events Only.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Dashboard - Event Plan Detailed View</span>
                                            <ul className="list-disc list-inside pl-4">
                                                <li>Detailed View of the Event.</li>
                                                <li>Edit - Edit to edit the Main plandetails.</li>
                                                <li>Del  - Delete is Disabled When Vendor is Planned.</li>
                                                <li>
                                                    <span className="font-semibold">PlanVendor</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>
                                                            Plan different Vendors for the event services like Photography, Catering, Travelarrangements, Hall,..
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="font-semibold">PlanEventPreference</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>
                                                            User Preference Description input for the event regarding.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="font-semibold">User Preference cards View</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>
                                                            Shall Edit and Delete.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Planned Vendor Details Cards ViewDashboard - Event Plan Detailed View</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>Edit  Disabled when Registered Checked.</li>
                                                        <li>Del   Disabled when Registered Checked.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="font-semibold">RaisePayment - Event Payment</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>Enabled When Registered.</li>
                                                        <li>Payment Made details input.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="font-semibold">ViewPayments</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>Enabled When Registered.</li>
                                                        <li>Dashboard Cards View for the payments made for that particular vendor.</li>
                                                        <li>Edit  Payments made shall be edited.</li>
                                                        <li>Del   Payments made shall be deleted.</li>
                                                    
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Event Summary View</span>
                                                    <ul className="list-disc list-inside pl-4">
                                                        <li>Planned Basis.</li>
                                                        <li>Confirmed/Registerd Basis.</li>                                        
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>                                
                        </li>
                    </ul>
                </li>
                </>
                </ProjectDetailCard>
            ):("")
        }

        {
            projTitleParam == "travelapp-management" ?
            (       
                <ProjectDetailCard
                    title="Travel/Tour Arrangement App"
                    sub="Focussed on Beautiful LandingPage with Register,Login, Contact and UserRatingForm(CRUD Operation) and Responsiveness"
                    url="https://tripworld.netlify.app/"
                    giturlfrontend="https://github.com/Vimalnash/FSD-TravelApp-Frontend"
                    giturlbackend="https://github.com/Vimalnash/FSD-TravelApp-Backend"
                    implementlist={
                        <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                            <li>MongoDB</li>
                            <li>Expressjs</li>
                            <li>Reactjs</li>
                            <li>Nodejs</li>
                            <li>CSS-Tailwind and Custom</li>
                        </ul>
                    }
                >
                <>
                    <li><span className="font-semibold">Users Login - </span>Who search for to go for a Trip
                        <ul className="list-disc list-inside px-2">
                            <li>Registration and Login with Authentication and Authorization Process(token generation), Password Hash</li>
                            <li>New User Register and Activate via Mail to access the portal</li>
                            <li>Existing User Login</li>
                            <li>Forgot Password Functionality, Reset via mail by accessing reset link sent to the respective person</li>
                            <li>Contact Form to approach the site provider - Sends the details to admin mail</li>
                            <li>User Rating Form - Mobile App Model (CRUD Operation)</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">Additional - </span>
                        <ul className="list-disc list-inside px-2"> 
                            <li>Resonsive Design</li>
                            <li>Professional like Landing Page - Navbar, welcome Layout, destination cards, contact form, smoothscroll, footer</li>
                        </ul>
                    </li>
                </>
                </ProjectDetailCard>
            ):("")
        }

        {
            projTitleParam == "avinashportfolio" ?
            (       
                <ProjectDetailCard
                    title="Portfolio-Avinash Arularasu"
                    sub="Focussed on the Contents of Myself and ThemeSetting and Responsiveness and Interactive design"
                    url="https://avinasharularasu.netlify.app/"
                    giturlfrontend="https://github.com/Vimalnash/avinasharularasu-pf-frontend"
                    giturlbackend="https://github.com/Vimalnash/avinasharularasu-pf-backend"
                    implementlist={
                        <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                            <li>MongoDB</li>
                            <li>Expressjs</li>
                            <li>Reactjs</li>
                            <li>Nodejs</li>
                            <li>CSS-Tailwind and Custom</li>
                        </ul>
                    }
                >
                <>
                <ul className="list-disc list-inside">
                    <li><span className="font-semibold">Theme Color - </span>Used Custom Theme and DarkMode Switch</li>
                    <li><span className="font-semibold">Responsive Design </span></li>
                    <li><span className="font-semibold">Project Detail Page </span> Static Contents used Tables, Lists, Paragraph, span, anchor,iframe..</li>
                    <li><span className="font-semibold">Contact Detail Submit - </span>Message Stored in MongoDB Backend and Sent to me in mail</li>
                </ul>
                </>
                </ProjectDetailCard>
            ):("")
        }

        {
            projTitleParam == "MovieBrowser" ?
            (       
                <ProjectDetailCard
                    title="Movie Browser"
                    sub="Implemented Search Functionality for Movies Search and Movie Full Details Page and Basic Login and Logout Navigation"
                    url="https://moviesglobal.netlify.app/"
                    giturlfrontend="https://github.com/Vimalnash/FSD-MovieBrowser-Frontend"
                    giturlbackend=""
                    implementlist={
                        <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                            {/* <li>MongoDB</li>
                            <li>Expressjs</li>
                            <li>Nodejs</li> */}
                            <li>Reactjs</li>
                            <li>CSS-Bootstrap and Custom</li>
                        </ul>
                    }
                >
                <>
                    <ul className="list-disc list-inside">
                        <li>Login User only shall able to search.</li>
                        <li>Beautiful user friendly Search Page for large screen only. </li>
                        <li>Backtrack to Detail page.</li>
                    </ul>
                </>
                </ProjectDetailCard>
            ):("")
        }
        {
            projTitleParam == "ecommerce" ?
            (       
                <ProjectDetailCard
                    title="E-Commerce App"
                    sub="Focussed on Beautiful LandingPage with Products listing(with Search Criteria) with great product cards, Register,Login and Product Details Page and Responsiveness"
                    url="https://fsd-ecommerce.netlify.app/"
                    giturlfrontend="https://github.com/Vimalnash/FSD-ECommerce-Frontend"
                    giturlbackend="https://github.com/Vimalnash/FSD-ECommerce-Backend"
                    implementlist={
                        <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                            <li>MongoDB</li>
                            <li>Expressjs</li>
                            <li>Reactjs</li>
                            <li>Nodejs</li>
                            <li>CSS-Tailwind and Custom</li>
                        </ul>
                    }
                    demovideo = {
                        <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Wu8DXUHQu8Q?si=_rylzis59t5P3tQy" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                        >
                        </iframe>
                    }
                >
                <>
                    <li><span className="font-semibold">Users Login - </span>
                        <ul className="list-disc list-inside">
                            <li>Registration and Login with Authentication and Authorization Process(token generation), Password Hash</li>
                            <li>New User Register and Activate via Mail to access the portal</li>
                            <li>Existing User Login</li>
                            <li>Forgot Password Functionality, Reset via mail by accessing reset link sent to the respective person</li>
                            <li>User Rating Form- CRUD Operation and all user reviews for a product-Coming Soon</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">Additional - </span>
                        <ul className="list-disc list-inside"> 
                            <li>Resonsive Design</li>
                            <li>Landing Page with Custom Built Responsive designed Product Cards</li>
                            <li>Product Detail Page - with related category product listing</li>

                        </ul>
                    </li>
                </>
                </ProjectDetailCard>
            ):("")
        }
        {
            projTitleParam == "productlisting" ?
            (       
                <ProjectDetailCard
                    title="Product Listing"
                    sub="Used Redux for state management and Displaying List of Products with Custom built Pagination Functionality and Search."
                    url="https://productslistpagination.netlify.app/"
                    giturlfrontend="https://github.com/Vimalnash/Products-Frontend"
                    giturlbackend=""
                    implementlist={
                        <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                            <li>Reactjs</li>
                            <li>ReduxToolkit</li>
                            <li>CSS-Tailwind</li>
                        </ul>
                    }
                >
                <>
                    <ul className="list-disc list-inside">
                        <li>Used Redux for State Management</li>
                        <li>Simple user friendly Product Listing with Custom Pagination and Search Page</li>
                    </ul>
                </>
                </ProjectDetailCard>
            ):("")
        }
        </div>
    )
};