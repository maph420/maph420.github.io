import { BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen m-0 flex flex-col bg-primary text-secondary sidebar-class sidebar-width">
      <SideBarIcon icon={<FaHome size="28" />} text="Home" anchor="#home" />
      <SideBarIcon
        icon={<BsPersonCircle size="28" />}
        text="About"
        anchor="#about"
      />
      <SideBarIcon
        icon={<FaRegFolderOpen size="28" />}
        text="Works"
        anchor="#works"
      />
      <SideBarIcon
      icon={<AiFillGithub size="28" />}
      text="Github"
      anchor="https://github.com/maph420"
      bottomIcon="true"
      target="self"
      />
      
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip", anchor = "#", bottomIcon = false, target= "blank"}) => (
  <>
  { bottomIcon === false ? (
  <a href={anchor}>
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </a>) : (
    <a href={anchor} className="bottom-icons" target={target}>
    <div className="sidebar-icon2 group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
    
  </a>
  )}
  </>
);

export default Sidebar;
