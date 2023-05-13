import React from "react";
import FadeIn from 'react-fade-in';
import ReactCountryFlag from "react-country-flag"

function AppAbout() {
  return (
    <div id="about" className="sector">
      <FadeIn>
      <div className="info-box">
        <div className="centered title">
          <h2 class="about-me-title">whoami?</h2>
        
          
            <div className="about-me-box">
              <p class="no-align about-me-text"> 
              🌌 Hey! My name is Juan Ignacio (aka Juani) I am a <a class="link" href="https://web.fceia.unr.edu.ar/es/licenciatura-en-ciencias-de-la-computación.html" target={"_blank"}>Computer Science</a> student currently living in Argentina <ReactCountryFlag countryCode="AR" svg style=
                {{width: '1.3em',height: '1.3em',}} title="AR"/> . 
             
                Although my mainly interests recently have been focusing in the cybersecurity field 🔒👨‍💻 I also have experience and enjoy low-level programming
                and backend development! 🛠⚙️
              
              <br/>
              <br/>
              <ul>
                <li> <ReactCountryFlag countryCode="GB" svg style=
                {{width: '1.3em',height: '1.3em',}} title="GB"/> I have fluent B2 english. 
                </li>
                <li> <ReactCountryFlag countryCode="CN" svg style=
                {{width: '1.3em',height: '1.3em',}} title="CN"/> I'm also learning chinese. 你好， 很高兴认识你！
                </li>
              </ul>
            </p>
            </div>
          
        </div>
      </div>
      </FadeIn>
    </div>
    
  );
}

export default AppAbout;
