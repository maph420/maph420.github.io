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

          <div className="box">
            <div className="box-text about-me-box">
              <p class="no-align"> 
              🌌 Hey! My name's Juan Ignacio (call me Juani) I'm a <a class="link" href="https://web.fceia.unr.edu.ar/es/licenciatura-en-ciencias-de-la-computación.html" target={"_blank"}>Computer Science</a> student currently living in Argentina <ReactCountryFlag countryCode="AR" svg style=
                {{width: '1.3em',height: '1.3em',}} title="AR"/> . I'm interested in fullstack web development 🛠🌐 (mostly backend) and I'm getting into the cybersecurity world! 🔒👨‍💻
              <br/>
              <br/>
              <ul>
                <li>I have fluent B2 english. <ReactCountryFlag countryCode="GB" svg style=
                {{width: '1.3em',height: '1.3em',}} title="GB"/>
                </li>
                <li>I'm also learning chinese! <ReactCountryFlag countryCode="CN" svg style=
                {{width: '1.3em',height: '1.3em',}} title="CN"/> 你好, 陌生人！
                </li>
              </ul>


            </p>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </div>
    
  );
}

export default AppAbout;
