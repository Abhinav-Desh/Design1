import setupImage from '../assets/homepage-setup-sip-in-2mins.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const SetupSIP = () =>{
return(
    <div style={{height:'700px', marginTop:'100px',padding:'30px'}}>
       <div className="parent" style={{display:'flex',justifyContent:'space-between',alignItems:'center' }}>
            <div className="left-child2"  >
                <img src={setupImage} alt="" />
            </div>
            <div className="right-child2" >
            <p style={{fontSize:'100px',fontWeight:'600'}}>Setup SIP in 2 Minutes</p>
            <p style={{ color:'grey',marginTop:'10px',fontSize:'25px'}}>Set up SIP in Indian Stocks, Direct Mutual Funds, and US Stocks and diversify your portfolio to grow your Net Worth.</p>
            <button style={{ 
            letterSpacing:'2px',
            fontSize: '24px',
            fontWeight: '500',
            padding: '20px 20px',
            borderRadius: '30px',
            backgroundColor: '#007BFF',
            color: 'white',
            cursor: 'pointer',
             border:'none',
            marginTop:'40px'}}>Setup SIP</button>
            <button style={{fontSize:'25px',
                            fontWeight:'500',
                            color:'#007BFF',
                            marginLeft:'40px',
                            backgroundColor:'white',
                            cursor:'pointer',
                            border:'none'
            }}>SIP Calculator <ArrowForwardIcon/> </button>
            </div>
       </div>
       <div className="hover-options" 
 style={{
  width: '100%',
  marginTop: '50px',
  overflow: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none', 
  display: 'flex',  
  flexWrap: 'nowrap', 
  
}}>
   <button className= "hover-buttons" style={{backgroundColor:'white'}}>Motilal Oswal Nifty India Defence</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}} >Mahindra ManulifevLiquid Fund</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>Navi Nifty 50</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>HDFC Low Duration</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>UTI Short Duration</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>Aditya Birla Sun Life Cooperation Bond</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>Kotak Dynamic Bond</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>HDFC Balance Advantage </button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>SBI Energy Opportunities</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>ICICI Prudential Bharat FOF 22</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>Parag Pharikh Flexi Cap</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>Nippon Small Cap</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>ADANIPOWER</button>
  <button className= "hover-buttons" style={{backgroundColor:'white'}}>SUZLON</button>

</div>
    </div>
);
}

export default SetupSIP;