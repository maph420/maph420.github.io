import {GiAk47} from "react-icons/gi";
import { IoFlashSharp } from "react-icons/io5";
import {FaHome} from "react-icons/fa";

const Sidebar = () => {
    return (
        // con pt-x bajamos un poco la barra
        <div className="fixed top-0 left-0 h-screen m-0 flex flex-col bg-primary text-secondary sidebar-class w-16">
        
        <SideBarIcon icon={<FaHome size="28" />} text="Home" anchor="#home" />
         <SideBarIcon icon={<GiAk47 size="28" />} text="About" anchor="#about"/>
         <SideBarIcon icon={<IoFlashSharp size="28" />} text="Works" anchor="#works" />
        </div>
    );
};

const SideBarIcon = ({icon, text = 'tooltip', anchor = '#' }) => (
    <a href={anchor}>
    <div className="sidebar-icon group">
    {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
        {text}
        </span>
    </div>
    </a>
);


export default Sidebar