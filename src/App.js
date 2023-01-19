import Sidebar from "./components/Sidebar";
import AppAbout from "./components/About";
import { Layout } from "antd";
import AppHome from "./components/Home";
import AppWorks from "./components/Works";
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const Content = Layout;

const spinnerStyle = {
  position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" 
};
const legendStyle = {
  color: "whitesmoke",
  textAlign: "center",
  marginBottom: "10%"
};


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="flex">
          <Content>
            <Sidebar />
            <AppHome />
            <AppAbout />
            <AppWorks />
          </Content>
        </div>
      ) : (
        <div style={spinnerStyle}>
          <legend style={legendStyle}>Loading...</legend>
          <BarLoader color={"#123abc"}/>
        </div>
      )}
    </>
  );
}
