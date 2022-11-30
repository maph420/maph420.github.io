import Sidebar from "./components/Sidebar";
import AppAbout from "./components/About"
import { Layout } from 'antd';
import AppHome from "./components/Home";
import AppWorks from "./components/Works";

const Content = Layout;


export default function App() {
  return (
    <div className="flex">
      <Content>
        <Sidebar />
        <AppHome />
        <AppAbout />
        <AppWorks />
      </Content>
    </div>
  )
}