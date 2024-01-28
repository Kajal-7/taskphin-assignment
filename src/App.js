import './App.css';
import './components/CandidateForm'
import CandidateForm from './components/CandidateForm';
import DisplayCandidates from './pages/DisplayCandidates';
import Footer from './footer/Footer'
import MainNavbar from './header/MainNavbar';
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App font-epilogue min-h-screen flex flex-col bg-[#13131a]">
      <Router>
      <MainNavbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add-candidate" element={<CandidateForm/>}/>
          <Route path="/view-candidates" element={<DisplayCandidates/>} /> 
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
