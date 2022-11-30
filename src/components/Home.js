import React from 'react';
import pfp from "../im/profile_picture.png"
import bashLogo from "../im/stack/bash.png"
import CLogo from "../im/stack/C.png"
import HTMLLogo from "../im/stack/HTML.png"
import javaScriptLogo from "../im/stack/javascript.png"
import mongoLogo from "../im/stack/mongo.png"
import pythonLogo from "../im/stack/python.png"
import streamlitLogo from "../im/stack/streamlit.png"
import streamlitLogoAlt from "../im/stack/streamlitalt.png"


const myStack = [
  bashLogo,
  CLogo,
  HTMLLogo,
  javaScriptLogo,
  mongoLogo,
  pythonLogo,
];


const StackRow = ({stack}) => (
  <div>
    {stack.map(stackElem => (
      <img class="stack-logo" src={`${stackElem}`} alt="stack element"></img>
    ))}
  </div>
);


function AppHome() {
  return (
    <div id="home" className="sector">
      <div className="info-box">

        <div class="user-img-container"> 
          <img class='user-img' src={pfp} alt='profile pic'/>  
        </div>

        <div class="user-info">
          <h2 class="user-name title">maph420</h2>
          <p class="user-text">jhasdkjashkjdashjkdajskh</p>
          <p class="user-text">jhasdkjashkjdashjkdajskh</p>
          <p class="user-text">jhasdkjashkjdashjkdajskh</p>
          <p class="user-text">jhasdkjashkjdashjkdajskh</p>
          <p class="user-text">jhasdkjashkjdashjkdajskh</p>
          <div class="stack-div">
            <StackRow stack={myStack}></StackRow>
          </div>
          
        </div>

      </div> 
    </div>
  );
}

export default AppHome;