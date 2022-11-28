import React from 'react';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppHome() {
  return (
    <div id="home" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2 class>Home</h2>

          <div className='proy'>

            <div className='proyText'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            </div>
          </div>   
        </div>
      </div> 
    </div>
        
      
  );
}



export default AppHome;