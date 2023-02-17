import Item from "./Item";
import "./LeftSide.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import ChatContext from "./../context/ChatContext";
import SearchBar from "./SearchBar";

const LeftSide = () => {
  const ctx = useContext(ChatContext);
  const [currArr, setCurrArr] = useState(ctx.data);

  useEffect(() => {
    const filtertedArr = ctx.data.filter((product) => {
      const title = product.title.toLowerCase();
      const input = ctx.searchInput.toLowerCase();
      return title.includes(input);
    });
    setCurrArr(filtertedArr);
  }, [ctx.searchInput, ctx.data]);

  return (
    <div className="leftside-container">
      <SearchBar />
      <div className="left-item-container">
        {currArr.map((product) => {
          return <Item product={product} />;
        })}
      </div>
    </div>
  );
};
export default LeftSide;
