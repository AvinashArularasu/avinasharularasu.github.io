import { ProjectCard } from "../Layouts/ProjectCard";
import imgLandingPage from "../assets/img/projImages/WeddingWise-EM/LandingPage.jpg";
import imgTravelApp from "../assets/img/projImages/TravelApp/TravelAppLandingPage.jpg";
import imgEcommerceApp from "../assets/img/projImages/E-Commerce/E-CommerceLandingPage.jpg";
import imgProductPaginationApp from "../assets/img/projImages/ProductListing/ProductListingLandingPage.jpg";
import imgPortfolio from "../assets/img/projImages/Portfolio-AvinashArularasu/PortfolioLandingPage.jpg";
import imgMovieBrowser from "../assets/img/projImages/MovieBrowser/SearchPage.jpg";
import noImg from "../assets/img/projImages/NoImg.png";
import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../Context/AppContext";

export function ProjectsPage() {
        const navigate = useNavigate();
    const {
        bgGradFromColorTheme,
        bgGradToColorTheme,
    } = UseAppContext();
  return (
    <div
      className="overflow-x-auto min-h-screen bg-gradient-to-l from-base-100 to-base-200 tracking-wide "
    >
      <div 
        style={ {backgroundImage: `linear-gradient(180deg, ${bgGradFromColorTheme}, ${bgGradToColorTheme})`} }        
        className="flex flex-row justify-center items-center gap-2 w-full z-40 h-12 text-white text-xl font-semibold sticky top-0 left-0 right-0"
      >
          <a 
              className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 cursor-pointer" 
              onClick={() => {navigate("/")}}
              href="#projects"
          >
              &larr;GoHomePage
          </a>
      </div>
      <h3 className="mb-10 text-4xl font-semibold text-center">MyProjects</h3>
      <div
      className="pt-10 pb-10 flex flex-col justify-center items-center gap-[20px] px-5 md:px-32 lg:flex-row lg:flex-wrap lg:gap-10"
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
            projImg={noImg}
            projTitle="HRM-AttendanceShift"
            projShortDesc="Mark Attendance and Assign Shift"
            page="hrmlabour"
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
        <ProjectCard 
            projImg={noImg}
            projTitle="Crudformik"
            projShortDesc="Used React Formik for Form Entry Operation"
            page="gtd19-rpt-crudformik"
        />
        <ProjectCard 
            projImg={noImg}
            projTitle="assign-mentor"
            projShortDesc="Create Student,Mentor and AssignStudent to a Mentor"
            page="assign-mentor-gtd27"
        />
        <ProjectCard 
            projImg={noImg}
            projTitle="cruduserdata"
            projShortDesc="CRUD Operation for User Form"
            page="gtd18-rpt-cruduserdata"
        />
        <ProjectCard 
            projImg={noImg}
            projTitle="ToDos"
            projShortDesc="ToDo Task List"
            page="gtd15-rpt-ToDos"
        />
        <ProjectCard 
            projImg={noImg}
            projTitle="API"
            projShortDesc="Used API for Data Rendering"
            page="gtd12-api-1"
        />
        <ProjectCard 
            projImg={noImg}
            projTitle="API"
            projShortDesc="Used API for Data Rendering"
            page="gtd12-api-2"
        />
        <ProjectCard 
            projImg={noImg}
            projTitle="API"
            projShortDesc="Used API for Data Rendering"
            page="gtd12-api-3"
        />

      </div>
    </div>
  )
}