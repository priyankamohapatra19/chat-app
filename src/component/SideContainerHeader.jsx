import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import "./SideContainerHeader.css";

const SideContainerHeader = () => {
  const ctx = useContext(ChatContext);

  return (
    <div className="side-header-container">
      <div className="header-image">
        <img
          className="image"
          src={ctx.currItem.imageURL}
          alt=""
          width="50px"
          height="50px"
        />
      </div>
      <div className="header-title">{ctx.currItem.title}</div>
    </div>
  );
};
export default SideContainerHeader;
