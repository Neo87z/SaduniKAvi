import './App.css';
import ReactDom from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Routes } from 'react-router-dom'
import Home from './Components/Home';
import ScoliosisCategories from './Components/ScoliosisCategories';
import UploadXrayImage from './Components/UploadXrayImg';
import Community from './Components/Community';
import ScoliosisTreatments from './Components/ScoliosisTreatments';
import MainNavBar from './Components/MainNavBar';
import ScoliosisMeasuredResult from './Components/ScoliosisMeasuredResult';

const  App = () => {
  return (
    <div className="App">
      <Router>
        <main>
          <MainNavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/measure" element={<UploadXrayImage />} />
            <Route path="/severity" element={<ScoliosisMeasuredResult />} />
            <Route path="/types" element={<ScoliosisCategories />} />
            <Route path="/treatments" element={<ScoliosisTreatments />} />
            <Route path="/community" element={<Community />} />

            {/* <Route path='/types' exact>
          <ScoliosisCategories/>
        </Route> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
