import { useContext } from "react";
import "./SearchBar.css";
import ChatContext from "../context/ChatContext";

const SearchBar = () => {
  const ctx = useContext(ChatContext);
  const handleInput = (e) => {
    ctx.setSearchInput(e.target.value.trim());
  };
  return (
    <div className="search-bar">
      <input
        className="input-container"
        type="text"
        value={ctx.searchInput}
        onChange={handleInput}
      />
    </div>
  );
};
export default SearchBar;
