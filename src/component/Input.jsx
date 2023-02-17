import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import "./Input.css";

const Input = () => {
  const ctx = useContext(ChatContext);
  const handleChat = (e) => {
    ctx.setMsg(e.target.value);
  };
  console.log("data: ", ctx.data);
  console.log("curr: ", ctx.currItem);
  const handleSend = () => {
    const newArr = [...ctx.currItem.messageList];

    newArr.push({
      messageId: `msg${ctx.currItem.messageList.length + 1}`,
      message: ctx.msg,
      timestamp: Date.now(),
      sender: "USER",
      messageType: "text"
    });

    const idx = ctx.data.findIndex((val) => {
      return val.id === ctx.currItem.id;
    });
    console.log("idx: ", idx);
    const currData = ctx.data;
    currData[idx]["latestMessageTimestamp"] = Date.now();
    currData[idx]["messageList"] = newArr;
    ctx.setData(currData);
    ctx.setMsg("");
  };
  return (
    <div className="input-container-chat">
      <input
        className="input"
        type="text"
        onChange={handleChat}
        value={ctx.msg}
      />
      <button className="send-button" onClick={handleSend}>
        send
      </button>
    </div>
  );
};
export default Input;
