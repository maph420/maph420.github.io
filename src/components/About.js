import React from 'react';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppAbout() {
  return (
    <div id="about" className="block bgGray">
      <div className="container-fluid bg">
        <div className="titleHolder">
          <h2 class>About me</h2>

          <div className='box'>

            <div className='box-text'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            </div>
          </div>   
        </div>
      </div> 
    </div>
        
      
  );
}



export default AppAbout;