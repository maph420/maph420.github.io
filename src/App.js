import Sidebar from "./Sidebar";
import AppAbout from "./About"
import ContentContainer from "./Content"
import { Layout } from 'antd';

const Content = Layout;


export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Content>
        <AppAbout />
      </Content>
    </div>
  

    
  )
}