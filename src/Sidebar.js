import {GiAk47} from "react-icons/gi";
import { IoFlashSharp } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary">
         <SideBarIcon icon={<GiAk47 size="28" />} text="About" />
         <SideBarIcon icon={<IoFlashSharp size="28" />} text="aaaaaaa" />
        </div>
    );
};

const SideBarIcon = ({icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
        {text}
        </span>
    </div>
);


export default Sidebar;