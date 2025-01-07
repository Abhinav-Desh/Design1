import { useState } from "react";

const OpenInput = ({ toggleInput, setToggleInput,isMobileView,setIsMobileView }) => {
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

  const Search = [
    "Vodafone Idea Ltd",
    "Greaves Cotton Ltd",
    "ITI Ltd",
    "Sagility India Ltd",
    "Indian Renewable Energy Development Agency Ltd",
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
        padding: "15px 5px",
        borderRadius: "10px",
        backgroundColor: "rgb(239, 239, 239)",
        border: "1px solid grey",
        display: toggleInput ? "flex" : "none",
        overflow: "scroll",
        zIndex: "500",
      }}
    >
      <div className="menu-container" style={{ display: "flex", flexDirection: "column" }}>
        
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
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={activeIndex === index ? "active" : "Input-category-button"}
              onClick={() => handleButtonCategory(index)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "20px",
                backgroundColor: activeIndex === index ? "#007BFF" : "transparent",
                color: activeIndex === index ? "white" : "#007BFF",
                transition: "all 0.3s ease",
                fontWeight: "600", 
                textTransform: "capitalize",
              }}
            >
              {category}
            </div>
          ))}
        </div>

        <div
          className="Trending-Searches"
          style={{
            marginTop: "20px",
            color: "grey",
            fontSize: "18px",
            fontWeight: "bold", 
          }}
        >
          Trending Searches
        </div>

        <div
          className="Search-options"
          style={{
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px", 
            justifyContent: "flex-start",
          }}
        >
          {Search.map((option, index) => (
            <div
              key={index}
              style={{
                padding: "8px 20px",
                cursor: "pointer",
                fontSize: "16px",
                border: "1px solid #007BFF",
                borderRadius: "30px",
                backgroundColor: "white",
                color: "#007BFF",
                fontWeight: "500",
                textTransform: "capitalize", 
                transition: "background-color 0.3s, transform 0.3s", 
              }}
            
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenInput;
