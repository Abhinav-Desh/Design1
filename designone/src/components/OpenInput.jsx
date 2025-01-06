import { useState } from "react";
import Navbar from "./Navbar";
const OpenInput = ({toggleInput,setToggleInput}) =>{
    const [isActive,setIsActive] = useState(false);
    const [storeIndex,setStoreIndex] = useState();
    let arr = [false,false,false,false,false,false,false]
    const handleButtonCategory =()=>{
       
    }
    return(
        <div className="Input-menu" style={{position:'absolute',top:'10%',left:'10%',width:'400px',height:'400px',padding:'15px',borderRadius:'10px',backgroundColor:'rgb(239, 239, 239)',border:'1px solid grey',display:toggleInput?'flex':'none',overflow:'scroll',zIndex:'500'}}>
            <div className="Input-category" style={{display:'flex',backgroundColor:'white',width:'100%',overflow:'auto',height:'50px',borderRadius:'10px',scrollbarWidth:'none',alignItems:'end'}}>
                <div className="Input-category-button " onClick={handleButtonCategory}>All</div>
                <div className="Input-category-button " onClick={handleButtonCategory}>Indian Equities</div>
                <div className="Input-category-button " onClick={handleButtonCategory}>F&O</div>
                <div className="Input-category-button " onClick={handleButtonCategory}>US Stocks</div>
                <div className="Input-category-button " onClick={handleButtonCategory}>Mutual Funds</div>
                <div className="Input-category-button " onClick={handleButtonCategory}>Insurance</div>
                <div className="Input-category-button ">Fixed Income</div>
            </div>
        </div>
    );
}

export default OpenInput;