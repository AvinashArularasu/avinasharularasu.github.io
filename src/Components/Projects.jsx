import { ProjectCard } from "../Layouts/ProjectCard";
import imgLandingPage from "../assets/img/projImages/WeddingWise-EM/LandingPage.jpg";
import imgTravelApp from "../assets/img/projImages/TravelApp/TravelAppLandingPage.jpg";
import imgEcommerceApp from "../assets/img/projImages/E-Commerce/E-CommerceLandingPage.jpg";
import imgProductPaginationApp from "../assets/img/projImages/ProductListing/ProductListingLandingPage.jpg";
import imgPortfolio from "../assets/img/projImages/Portfolio-AvinashArularasu/PortfolioLandingPage.jpg";
import imgMovieBrowser from "../assets/img/projImages/MovieBrowser/SearchPage.jpg";

export function Projects() {
    return (
        <div id="projects" 
            className="overflow-x-auto min-h-screen pt-16 bg-gradient-to-l from-base-100 to-base-200 tracking-wide "
        >
            <h3 className="mb-10 text-4xl font-semibold text-center">MyProjects</h3>
            <div
            className="anim pt-10 pb-10 flex flex-col justify-center items-center gap-[20px] px-5 md:px-32 lg:flex-row lg:flex-wrap lg:gap-10"
            >    
                    <ProjectCard 
                        projImg={imgLandingPage}
                        projTitle="Event Management"
                        projShortDesc="Excellent Concept Focussed On Wedding Event Arrangement with Admin Login and Userwise, VendorWise DataManagement"
                        page="weddingwise-eventmanagement"
                    />
                    <ProjectCard 
                        projImg={imgTravelApp}
                        projTitle="Travel App"
                        projShortDesc="Beautiful LandingPage with Responsiveness Full Login Functionality and UserRating-MobileApp Model(CRUD)"
                        page="travelapp-management"
                    />
                    <ProjectCard 
                        projImg={imgEcommerceApp}
                        projTitle="E-Commerce"
                        projShortDesc="Beautiful ProductsListing and ProductsDetailPage. Responsivess, Product Data from custom backend"
                        page="ecommerce"
                    />
                    <ProjectCard 
                        projImg={imgPortfolio}
                        projTitle="Portfolio"
                        projShortDesc="Simple and Elegant with darkMode and Different Color Theme, ContactForm with saving in backend and more.."
                        page="avinashportfolio"
                    />
                    <ProjectCard 
                        projImg={imgProductPaginationApp}
                        projTitle="Product Listing"
                        projShortDesc="Used Redux for StateManagement, Custom built Pagination and Listing Products with SearchCriteria."
                        page="productlisting"
                    />
                    <ProjectCard 
                        projImg={imgMovieBrowser}
                        projTitle="Movie Browser"
                        projShortDesc="Used API Key&Token - Browse from Millions of Movies to get Details and Detail Page"
                        page="MovieBrowser"
                    />
            </div>
        </div>
    )
}