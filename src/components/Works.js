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
            <h3 class="subtitle">Proyecto 1</h3>
            <img
              className="centered"
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            />

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
              <a href="#" className="box-text">
                Link a Proyecto 1
              </a>
            </div>
          </div>

          <div className="box">
            <h3 class="subtitle">Proyecto 2</h3>
            <img
              className="centered"
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            />

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
              <a href="#" className="box-text">
                Link a Proyecto 2
              </a>
            </div>
          </div>

          <div className="box">
            <h3 class="subtitle">Proyecto 3</h3>
            <img
              className="centered"
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            />

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
              <a href="#" className="box-text">
                Link a Proyecto 3
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
