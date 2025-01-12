
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import OptionStocks from './components/OptionStocks';
import ZeroCost from './components/ZeroCost';
import SetupSIP from './components/SetupSIP'
import OpenInput from './components/OpenInput';

function App() {
  const [toggleInput,setToggleInput]  = useState(false);
  const [isMobileView,setIsMobileView] = useState(false);
  return (
    <div>
      
      <Navbar toggleInput = {toggleInput} setToggleInput={setToggleInput} isMobileView={isMobileView} setIsMobileView={setIsMobileView}/>
      <OptionStocks isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
      <OpenInput toggleInput = {toggleInput} setToggleInput={setToggleInput} isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
      <ZeroCost isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
      <SetupSIP isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
    </div>
  );
}

export default App;
