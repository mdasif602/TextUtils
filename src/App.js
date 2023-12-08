import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';
import Alert from './Components/Alert';
import NoPage from './Components/NoPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// let name = "asif";
// function App() {
//   return (
//     <>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Service</li>
//       </nav>
//       <div classNameName="container">
//         <h1>Hello {name}</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda vel dolor corporis, impedit libero cum excepturi eius alias voluptatem ad velit fugit exercitationem, magni nobis in provident magnam veniam? Voluptas, facilis quisquam. Consequatur.</p>
//       </div>
//     </>
//   );
// }

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not
  const [textMode, setTextMode] = useState('text-dark'); 
  const [text, setText] = useState('Dark');
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtncolor] = useState("primary");
  const [navColor, setNavcolor] = useState("rgb(223, 218, 209)");
  const [textColor, setTextcolor] = useState("dark");
  // const [darkCol, setDarkCol] = useState('dark');
  // var col = "";
  
  const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      setTextMode('text-light');
      setText('Light');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success")
      setNavcolor("black")
      setTextcolor("white")
      setBtncolor("secondary")
      document.title = "TextUtils : Dark Mode"

      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 1500);

    } else {
      setMode('light');
      setTextMode('text-dark');
      setText('Dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      setNavcolor("rgb(223, 218, 209)")
      setTextcolor("black")
      setBtncolor("primary")
      document.title = "TextUtils : Light Mode"
    }
    // if(textMode === 'light') {
    //   setTextMode('text-dark');
    // } else {
    //   setTextMode('text-light');
    // }
  }

  const blueToggle = () => {
    document.body.style.backgroundColor = '#0f2e5b';
    showAlert("Blue Dark mode has been enabled", "success")
    setBtncolor("primary")
    setNavcolor("#414177")
  }
  const redToggle = () => {
    document.body.style.backgroundColor = '#651019';
    showAlert("Red Dark mode has been enabled", "success")
    setBtncolor("danger")
    setNavcolor("#543838")
  }
  const greenToggle = () => {
    document.body.style.backgroundColor = '#084127';
    showAlert("Green Dark mode has been enabled", "success")
    setBtncolor("success")
    setNavcolor("#3f623f")
  }


  return(
    <>
    <BrowserRouter>
      <Navbar title = "TextUtils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} textMode = {textMode} text = {text} navColor = {navColor} textColor = {textColor} blueToggle = {blueToggle} redToggle = {redToggle} greenToggle = {greenToggle}/>
      {/* <Navbar/> */}
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/" element={<TextForm showAlert = {showAlert} btnColor = {btnColor} heading = "Enter the text to Analyze" textMode = {textMode}/>}>
              </Route>
              <Route path="*" element={<NoPage />} />
        </Routes>
          {/* <TextForm showAlert = {showAlert} btnColor = {btnColor} heading = "Enter the text to Analyze" textMode = {textMode}/> */}
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
