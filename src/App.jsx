
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { UseAppContext } from './Context/AppContext'
import { ProjectDetail } from './Components/ProjectDetail';
import { Loader } from './Components/Loader';
import { Resume } from './Components/Resume';

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
            <Route path="/project/:projDetail" element={<ProjectDetail />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        </div>
        )
      }
    </div>
    </>
  )
};

export default App;
