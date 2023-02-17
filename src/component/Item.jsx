import { useEffect, useState, useContext } from "react";
import "./Item.css";
import ChatContext from "../context/ChatContext";

const Item = ({ product }) => {
  const ctx = useContext(ChatContext);
  const [currData, setCurrData] = useState({});

  useEffect(() => {
    const date = new Date(product.latestMessageTimestamp);
    let newDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    if (product.messageList.length > 0) {
      setCurrData({
        date: newDate,
        msg: product.messageList[product.messageList.length - 1].message
      });
    }
  }, [product, product.latestMessageTimestamp, product.messageList]);

  const handleItem = (product) => {
    ctx.setIsOpen(true);
    ctx.setCurrItem(product);
  };

  return (
    <div
      className={
        ctx.currItem && ctx.currItem.id === product.id
          ? "curr-item"
          : "item-container"
      }
      onClick={() => handleItem(product)}
    >
      <div className="item-image">
        <img
          className="image"
          src={product.imageURL}
          alt=""
          width="50px"
          height="50px"
        />
      </div>
      <div className="item-detail">
        <div className="item-title">{product.title}</div>
        <div className="item-msg">
          {currData.msg ? currData.msg : "Start a new conversation!"}
        </div>
      </div>
      <div className="item-time">{currData.date}</div>
    </div>
  );
};
export default Item;
