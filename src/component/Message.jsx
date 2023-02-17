import "./Message.css";

const Message = ({ val }) => {
  const time = new Date(val.timestamp);
  const newTime = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;

  return (
    <div className={val.sender === "BOT" ? "bot" : "user"}>
      <div>{val.message}</div>
      <div className="time">{newTime}</div>
    </div>
  );
};
export default Message;
