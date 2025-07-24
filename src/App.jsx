
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { UseAppContext } from './Context/AppContext'
import { ProjectDetailPage } from './Pages/ProjectDetailPage';
import { Loader } from './Components/Loader';
import { ResumePage } from './Pages/ResumePage';
import { ProjectsPage } from './Pages/ProjectsPage';

function App() {
  const {theme, LoadingTrue, setLoadingTrue} = UseAppContext();

  setTimeout(() => {
    setLoadingTrue(false);
  },2000)

  return (
    <>
    <div data-theme={theme}>
      {
        LoadingTrue ?
        (
          <Loader />
        )
        :
        (
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/project/:projDetail" element={<ProjectDetailPage />} />
            <Route exact path="/resume" element={<ResumePage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        )
      }
    </div>
    </>
  )
};

export default App;
