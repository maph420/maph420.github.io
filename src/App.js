import Sidebar from "./components/Sidebar";
import AppAbout from "./components/About";
import { Layout } from "antd";
import AppHome from "./components/Home";
import AppWorks from "./components/Works";
import { useEffect, useState } from "react";
import { MinimalSpinner } from "loading-animations-react";

const Content = Layout;

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
        <MinimalSpinner className="loading-spinner" color="white" />
      )}
    </>
  );
}
