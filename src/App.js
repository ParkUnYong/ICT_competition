import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Questions from './screens/Questions';
import ReactDoc from './screens/ReactDoc';
import Home from './screens/Home';
import About from './screens/About';
import Project from './screens/Project';
import NavBarElements from './components/Navbar/NavBarElements';
import header from './assets/images/image2.jpg'
import { HeaderImage } from './components/Styles/Header/LectureHeader.style'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBarElements/>
        <HeaderImage src={header}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Questions" element={<Questions/>}/>
          <Route path="/React-Doc" element={<ReactDoc/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
