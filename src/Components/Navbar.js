import React from 'react';
import PropTypes from 'prop-types'
// import flag from './About'
// import {Link} from "react-router-dom"

export default function Navbar(props) {

  // const myStyle =  {
  //     color:'black',
  //     backgroundColor: 'white'
  //    };

  // const [myStyle, setMyStyle] = useState( {
  //   color:'black',
  //   backgroundColor: 'white'
  //  }) 
   
   
   
  //   if(flag === 'light') {
  //       setMyStyle( {
  //           color:'black',
  //           backgroundColor: 'white'
  //       }) 
  //   }
  //   else {
  //       setMyStyle( {
  //           color:'white',
  //           backgroundColor: 'black'
  //       })
  //   }

  const colorfun = (mode) => {
      if (mode === "dark") {
        return (
           <>
            <button type="button" className="btn btn-primary mx-2" onClick={props.blueToggle}>Blue</button>
            <button type="button" className="btn btn-success mx-2" onClick={props.greenToggle}>Green</button>
            <button type="button" className="btn btn-danger mx-2"  onClick={props.redToggle}>Red</button>
           </>
        )
      }
  }

  return (

    
    <div>
    {/* data-bs-theme={`${props.mode}`} */}
       <nav className="navbar navbar-expand-lg"  style = {{backgroundColor : props.navColor}}>
              <div className="container-fluid">
                {/* <Link className="navbar-brand"  to="/" style={{color: props.textColor}}>{props.title}</Link> */}
                <a className="navbar-brand"  href="/" style={{color: props.textColor}}>{props.title}</a>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* <Link className="nav-link active" style={{color: props.textColor}} aria-current="page" to="/">Home</Link> */}
                      <a className="nav-link active" style={{color: props.textColor}} aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link mx-3" style={{color: props.textColor}} to="/about">{props.aboutText}</Link> */}
                      <a className="nav-link mx-3" style={{color: props.textColor}} href="/about">{props.aboutText}</a>
                    </li>
                  </ul>
                  {/* <Link to= "*"></Link> */}
                  {/* <form className="d-flex" role="search">
                    <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                  </form> */}
                  {colorfun(props.mode)}
                  <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label ${props.textMode}`} htmlFor="flexSwitchCheckDefault">Enable {props.text}Mode</label>
                  </div>
                </div>
              </div>
</nav>
    </div>
  )
}


Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired                                      
    }

// If no props was passed then default will be used
Navbar.defaultProps = {
    title : "Set title here",
    aboutText : "Set about here"
}