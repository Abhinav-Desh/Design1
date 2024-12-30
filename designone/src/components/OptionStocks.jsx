import CardOverflow from '../components/CardOverflow';


const OptionStocks = () =>{
    const fundoptions = ['Mutual Funds','Indian Stocks','US Stocks','IPO','Fixed Deposits','NPS'];
    const description = ['start building your portfolio with Just INR 100','Invest as low as INR 50 SIP on a weekly/monthly basis in any stocks',
        'Buy/Sell US stocks and ETFs from India directly','Apply for upcoming IPOs.Explore all the latest IPOs and new IPOs listing in 2024',
        'secure your money by Investing in high rated FD. Earn Upto 9.%*p.a.','Your pathway to Tax-Efficient Retirement Planning'
    ]
return (
<div className="OptionStocks">
    <div className="Option-description" style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
<p style={{fontSize:'20px',fontWeight:'500',color:'grey'}}>Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed Deposits.</p>
<p style={{fontSize:'20px',fontWeight:'500',color:'grey'}}>Set up your financial goals and link them with your investments on INDmoney.</p>
</div>

<div className="stocks" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    {/* <div></div>
    <div>card 2</div>
    <div>card 3</div>
    <div>card 4</div>
    <div>card 5</div> */}
      <swiper-container slides-per-view="3" space-between="10" scrollbar-clickable="true" mousewheel-invert="true">
            <swiper-slide><CardOverflow  fundoptions={fundoptions[0]} description={description[0]} /></swiper-slide>
            <swiper-slide><CardOverflow fundoptions={fundoptions[1]} description={description[1]}/></swiper-slide>
            <swiper-slide><CardOverflow fundoptions={fundoptions[2]} description={description[2]}/></swiper-slide>
            <swiper-slide><CardOverflow fundoptions={fundoptions[3]} description={description[3]}/></swiper-slide>
            <swiper-slide><CardOverflow fundoptions={fundoptions[4]} description={description[4]}/></swiper-slide>
            <swiper-slide><CardOverflow fundoptions={fundoptions[5]} description={description[5]}/></swiper-slide>
        </swiper-container>
</div>
</div>
);
}
export default OptionStocks;