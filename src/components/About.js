import React from "react";
import FadeIn from 'react-fade-in';

function AppAbout() {
  return (
    <div id="about" className="sector">
      <FadeIn>
      <div className="info-box">
        <div className="centered title">
          <h2>About me</h2>

          <div className="box">
            <div className="box-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
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
