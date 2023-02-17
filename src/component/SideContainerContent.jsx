import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import "./SideContainerContent.css";
import Message from "./Message";

const SideContainerContent = () => {
  const ctx = useContext(ChatContext);
  console.log("curr: ", ctx.currItem);
  return (
    <div className="side-container-content">
      {ctx.currItem?.messageList ? (
        ctx.currItem.messageList.map((val) => {
          return <Message val={val} />;
        })
      ) : (
        <div className="side-container-content-msg">Start a conversation!</div>
      )}
    </div>
  );
};
export default SideContainerContent;
