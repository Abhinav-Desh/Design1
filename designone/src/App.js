
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import OptionStocks from './components/OptionStocks';
import ZeroCost from './components/ZeroCost';
import SetupSIP from './components/SetupSIP'
import OpenInput from './components/OpenInput';
function App() {
  const [toggleInput,setToggleInput]  = useState(false);
  return (
    <div>
      
      <Navbar toggleInput = {toggleInput} setToggleInput={setToggleInput}/>
      <OptionStocks />
      <OpenInput toggleInput = {toggleInput} setToggleInput={setToggleInput} />
      <ZeroCost />
      <SetupSIP />
    </div>
  );
}

export default App;
