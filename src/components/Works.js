import React from "react";
import FadeIn from 'react-fade-in';


function AppWorks() {
  return (
    <div id="works" className="sector">
      <FadeIn>
      <div className="info-box">
        <div className="centered">
          <h2 class="title">Works</h2>

          <div className="box">
            <h3 class="work-subtitle">Four in a row</h3>
            <img
              className="centered"
              src="https://camo.githubusercontent.com/a5e5cee940e80455f6ece90e48bb2a0f9025723e28689935b74a4241b3dda909/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3637363939333637373730343239383531392f3938313738303730383033303833363832362f63756174726f656e6c696e65616c61726176656c2e504e47"
            />

            <div className="box-text">
              <p>
                This is a school project which main goal is to implement the famous "four in a row game" as an
                interactable web application. It's hosted on a virtualized docker container and the local PHP environment 
                is deployed using ddev. The web framework used is Laravel and all the logic is written in PHP.
                <br/>
                Although the project was not finished, all the game logic was already implemented 
                and even tested using Github continuos integration (Github CI). The only thing missing was
                merging the scripts with the visual part. You can have a look at it from here:
              </p>
              <a href="https://github.com/maph420/cuatroenlinea" className="box-text">
              cuatroenlinea
              </a>
            </div>
          </div>

          <div className="box">
            <h3 class="work-subtitle">Server-Client socket implementation</h3>
            <img
              className="centered"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAt0mqUi7fRd8Wy5KfVBBdglKQ8l14KMV0h5oQwtrktSTafm1snAOON3vw87PKt2P1ig&usqp=CAU"
            />

            <div className="box-text">
              <p>
                Another school assignment where we handle the interactions between 2 sockets, a server and a client. Each socket has their respective script and runs in its independant process.

                If the client wants to send data to the server, it must authenticate and server will respond with 
                different status codes (eg 220 would represent successfull login whilst 530 would represent
                wrong password during login). All source was written in C and compiled with make.


              </p>
              <a href="https://github.com/maph420/CRE-TP1_Sockets" className="box-text">
              Server-Client socket implementation
              </a>
            </div>
          </div>

          
        </div>
      </div>
      </FadeIn>
    </div>
  );
}

export default AppWorks;
