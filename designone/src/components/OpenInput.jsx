import { useState } from "react";
import Navbar from "./Navbar";

const OpenInput = ({ toggleInput, setToggleInput }) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

 
  const handleButtonCategory = (index) => {
    setActiveIndex(index); 
  };

  const categories = [
    "All",
    "Indian Equities",
    "F&O",
    "US Stocks",
    "Mutual Funds",
    "Insurance",
    "Fixed Income",
  ];

  return (
    <div
      className="Input-menu"
      style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "400px",
        height: "400px",
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: "rgb(239, 239, 239)",
        border: "1px solid grey",
        display: toggleInput ? "flex" : "none",
        overflow: "scroll",
        zIndex: "500",
      }}
    >
      <div
        className="Input-category"
        style={{
          display: "flex",
          backgroundColor: "white",
          width: "100%",
          overflow: "auto",
          height: "50px",
          borderRadius: "10px",
          scrollbarWidth: "none",
          alignItems: "end",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={activeIndex === index ? "active" : "Input-category-button"}
            onClick={() => handleButtonCategory(index)} 
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenInput;
