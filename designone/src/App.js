
import './App.css';
import Navbar from './components/Navbar';
import OptionStocks from './components/OptionStocks';
import ZeroCost from './components/ZeroCost';
import SetupSIP from './components/SetupSIP'
function App() {
  return (
    <div>
      <Navbar />
      <OptionStocks />
      <ZeroCost />
      <SetupSIP />
    </div>
  );
}

export default App;
