import Home from './Components/Home/Home';
import './App.css';
import Navbar from './Components/Navbar';
import Jobs from './Components/Jobs/Jobs';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from "react";
import { themeContext } from "./Context";




function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          

          
        

        </Routes>
      </Router>
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <Jobs/> */}
      {/* <Home/> */}
 
    </div>
  );
}

export default App;
