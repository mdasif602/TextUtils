import React from 'react'

let flag = 'light';


export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
        // border: '2px solid',
        // borderColor: props.mode === 'dark' ? 'white' : 'black'
    }
    // const [myStyle, setMyStyle] = useState( {
    //     color:'black',
    //     backgroundColor: 'white'
    // }) 
    
    // const [btnText,  setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'white') {
    //         setMyStyle( {
    //             color:'black',
    //             backgroundColor: 'white'
    //         }) 
    //         setBtnText("Enable Light Mode")
    //         flag = 'dark';
    //     }
    //     else {
    //         setMyStyle( {
    //             color:'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Dark Mode") 
    //         flag = 'light';
    //     }
    // }

  return (
    <div className = "container" style = {myStyle}>
        <h1 className = "my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style = {myStyle}>
                <div className="accordion-item" style = {myStyle}>
                    <h2 className="accordion-header" style = {myStyle}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {myStyle}>
                    Analyze Your text 
                    </button>
                    </h2>
                    <div id="collapseOne"  style = {myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</strong> 
                        {/* It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {myStyle}>
                        Free to Use
                    </button>
                    </h2>
                    <div id="collapseTwo" style = {myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {myStyle}>
                       Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" style = {myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
                    </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button onClick = {toggleStyle} className = "btn btn-outline-primary my-3">{btnText}</button>
                </div> */}
        </div>
    </div>
  )
}


export {flag}
