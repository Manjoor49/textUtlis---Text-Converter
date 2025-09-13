
import './App.css';
import Navbar from './myComponents/Navbar';
import Textform from './myComponents/Textform';
import About from './myComponents/About';
import React, {useState} from 'react';
import Alert from './myComponents/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {


    const [mode, setmode] = useState('dark');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
    
    const toggleMode = () =>{
      if(mode === 'dark'){
        setmode('light');
        document.body.style.backgroundColor = '#6d6f70' 
        document.getElementById('nav-body').style.backgroundColor = '#181e1f';
        showAlert("Light Mode Enabled", "success")
        document.title = "TextUtils - Dark mode"
        document.getElementById("icon").style.backgroundColor="wheat"
        
      }else{
        setmode('dark');
        document.body.style.backgroundColor = '#ffffff'
        document.getElementById('nav-body').style.backgroundColor = 'white';
        showAlert("Dark Mode Enabled", "success")
        document.title = "TextUtils - Light mode"
        document.getElementById("icon").style.backgroundColor="grey"
        
      }
    }
  return (
    <>
    <Router>
      <Navbar title="TextUtils"  aboutText="About Us" homePage="Home"  mode={mode} toggleMode= {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="TextUtils - enter text :" />} />
        </Routes>
        </div>   
    </Router>
    </>
  );
}

export default App;
