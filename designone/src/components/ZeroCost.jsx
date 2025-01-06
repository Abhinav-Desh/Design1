import homepage from '../assets/homepage-zero-cost-account-image.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ZeroCost = () =>{

    return(
        <div className="ZeroCost" style={{backgroundColor:'rgb(25, 28, 31)',marginTop:'20px',padding:'30px'}}>
            <div className="two-childs" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="left-child">
            <h1 style={{color:'white',fontSize:'100px'}}>Zero* Cost Trading Account</h1>
            <p style={{ fontWeight:'600',color:'grey',marginTop:'10px',fontSize:'30px'}}>Open a Demat account for Free*. Start Investing in Stocks,ETFs & Mutual Funds.</p>
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
            marginTop:'40px'}}>Open Free INDstocks A/C</button>
            <button style={{fontSize:'20px',
                            fontWeight:'500',
                            color:'#007BFF',
                            marginLeft:'40px',
                            backgroundColor:'rgb(25, 28, 31)',
                            cursor:'pointer',
                            border:'none'
            }}>Process to Open Account <ArrowForwardIcon />    </button>
            </div>
            <div className="right-child">
                <img src={homepage} alt="" />
            </div>

            </div>
            <div 
  className="hover-options" 
  style={{
    width: '100%',
    display: 'flex',
    overflow: 'auto',
    scrollbarWidth: 'none',  
    msOverflowStyle: 'none' 
  }}
>
  
  <button className= "hover-buttons">IRFC</button>
  <button className= "hover-buttons">ZOMATO</button>
  <button className= "hover-buttons">JIOFINANCE</button>
  <button className= "hover-buttons">HAL</button>
  <button className= "hover-buttons">IRCTC</button>
  <button className= "hover-buttons">LIC</button>
  <button className= "hover-buttons">BHEL</button>
  <button className= "hover-buttons">TATAMOTORS</button>
  <button className= "hover-buttons">YESBANK</button>
  <button className= "hover-buttons">TATASTEEL</button>
  <button className= "hover-buttons">PAYTM</button>
  <button className= "hover-buttons">NHPC</button>
  <button className= "hover-buttons">ADANIPOWER</button>
  <button className= "hover-buttons">SUZLON</button>
  <button className= "hover-buttons">BEL</button>
  <button className= "hover-buttons">WIPRO</button>
  <button className= "hover-buttons">HINDUNILVR</button>
</div>

<div style={{marginTop:"30px",color:'grey',fontSize:'15px',fontWeight:'600',marginBottom:'100px'}}>
Disclaimer for the creative: Investments in the securities market are subject to market risks, read all the related documents carefully before investing. Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing. Mutual Funds are non-exchange traded products, and INDmoney is merely acting as a mutual fund distributor. All disputes with respect to distribution activity, would not have access to the exchange investor redressal forum or arbitration mechanism. This is nowhere to be considered as an advice,
 recommendation or solicitation of an offer to buy or sell or subscribe for securities. INDstocks SIP/ Mini Save is a SIP feature that enables Customer(s) to save a fixed amount on a daily basis to invest in Indian Stock. INDmoney Private Limited 616, Level 6, Suncity Success Tower, Sector 65,
  Gurugram, 122005, SEBI Stock Broking Registration No: INZ000305337, Trading and Clearing Member of NSE (90267, M70042) and BSE, 
  BSE StarMF (6779), SEBI Depository Participant Reg. No. IN-DP-690-2022, Depository Participant ID: CDSL 12095500.
   Refer https://indstocks.com/pricing?type=indian-stocks; https://www.indstocks.com/page/indian-stocks-sip-terms-and-condition for further details.
   </div>
        </div>
    );
}

export default ZeroCost;