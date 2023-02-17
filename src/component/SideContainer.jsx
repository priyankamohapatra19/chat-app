import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import "./SideContainer.css";
import SideContainerContent from "./SideContainerContent";
import SideContainerHeader from "./SideContainerHeader";
import Input from "./Input";

const SideContainer = () => {
  const ctx = useContext(ChatContext);

  return (
    <div className="side-container">
      {ctx.isOpen && (
        <div className="chat-header">
          <SideContainerHeader />
        </div>
      )}
      <SideContainerContent />
      {ctx.currItem && <Input />}

      {/* <div className="chat-content"></div> */}
    </div>
  );
};
export default SideContainer;
