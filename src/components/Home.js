import React from "react";
import pfp from "../im/profile_picture.png";
import bashLogo from "../im/stack/bash.png";
import CLogo from "../im/stack/C.png";
import HTMLLogo from "../im/stack/HTML.png";
import javaScriptLogo from "../im/stack/javascript.png";
import mongoLogo from "../im/stack/mongo.png";
import pythonLogo from "../im/stack/python.png";
import reactLogo from "../im/stack/react.png";
import gitLogo from "../im/stack/git.png";
import streamlitLogo from "../im/stack/streamlit.png";
import mySQLLogo from "../im/stack/mySQLL.png";
import PHPLogo from "../im/stack/php.png";
import haskellLogo from "../im/stack/haskell.png";
import expressLogo from "../im/stack/expressJS.png";




const anotherStack = [
  {
    im: bashLogo,
    name: "Bash",
  },
  {
    im: CLogo,
    name: "C",
  },
  {
    im: HTMLLogo,
    name: "HTML",
  },
  {
    im: javaScriptLogo,
    name: "JavaScript",
  },
  {
    im: mongoLogo,
    name: "MongoDB",
  },
  {
    im: pythonLogo,
    name: "Python",
  },
  {
    im: reactLogo,
    name: "React",
  },
  {
    im: gitLogo,
    name: "Git",
  },
  {
    im: haskellLogo,
    name: "Haskell",
  },
  {
    im: streamlitLogo,
    name: "Streamlit",
  },
  {
    im: PHPLogo,
    name: "PHP",
  },
  {
    im: mySQLLogo,
    name: "MySQL",
  },
  {
    im: expressLogo,
    name: "expressJS"
  }
];




const StackRow = ({ stack }) => (
  <div class="stack-div">
    {stack.map((stackElem) => (
      <img
        title={stackElem.name}
        class="stack-logo"
        src={`${stackElem.im}`}
        alt={stackElem.name}
      ></img>
    ))}
  </div>
);



const myStyle = {
  fill: "whitesmoke",
  width: "60px"
};

function AppHome() {
  return (
    <div id="home" className="sector">
      <div className="info-box">
        <div class="user-img-container">
          <img class="user-img" src={pfp} alt="profile pic" />
        </div>

        <div class="user-info">
          <h2 class="user-name title">maph420</h2>
          <p class="user-text subtitle">‍💻 IT Technician</p>
          <p class="user-text">👤 18 yo</p>
          <p class="user-text">📚 My current stack contains:</p>

          

          
          <StackRow stack={anotherStack}></StackRow>
        </div>
      </div>
    </div>
  );
}

export default AppHome;
