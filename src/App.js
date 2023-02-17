import "./styles.css";
import { products } from "./dummy";
import LeftSide from "./component/LeftSide";
import SideContainer from "./component/SideContainer";
import { useState } from "react";
import ChatContext from "./context/ChatContext";

export default function App() {
  const [data, setData] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currItem, setCurrItem] = useState();
  const [msg, setMsg] = useState();
  const chatData = {
    data,
    searchInput,
    setSearchInput,
    setData,
    setIsOpen,
    isOpen,
    currItem,
    setCurrItem,
    msg,
    setMsg
  };
  return (
    <div className="app">
      <ChatContext.Provider value={chatData}>
        <LeftSide />
        <SideContainer />
      </ChatContext.Provider>
    </div>
  );
}
