import { useState } from 'react';
import logo from '../assets/download.png';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Navbar = ({ toggleInput, setToggleInput }) => {
  const [value, setInputValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const handleInput = (e) => {
    let InputVal = e.target.value;
    setInputValue(InputVal);
  }

  const OpenMenu = () => {
    setToggleInput(!toggleInput);
  };

  const toggleSideNav = () => {
    setIsMenuOpen(!isMenuOpen); 
  }

  return (
    <div>
      {/* Main Navbar */}
      <div
        className="Navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: '0',
          zIndex: '10',
        }}
      >
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            height="60px"
            width="60px"
            style={{
              borderRadius: '50%',
              border: '2px solid #007BFF',
              padding: '5px',
            }}
          />
        </div>

        <div
          className="searchBar"
          style={{
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '5px 10px',
            width: '30%',
            maxWidth: '400px',
          }}
        >
          <input
            type="text"
            placeholder="Search 'Vodafone Idea Ltd' "
            onChange={handleInput}
            onClick={OpenMenu}
            value={value}
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              padding: '8px',
              borderRadius: '20px',
              fontSize: '14px',
            }}
          />
        </div>

        <div
          className="navlists"
          style={{
            width: '40%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ul
            className="lists"
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: '0',
              padding: '0',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }} className='hover-item'>Invest</li>
            <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Features</li>
            <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Blogs</li>
            <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Pricing</li>
            <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }} className='hover-item'>Disclosure</li>
          </ul>
        </div>

        <div
          className="actions"
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '25%',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
            <div
              className="customer-services"
              style={{
                backgroundColor: '#f3f3f3',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <SupportAgentIcon sx={{ width: '30px', height: '30px', color: '#007BFF' }} />
            </div>

            <div
              className="login"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                padding: '6px 14px',
                textAlign: 'center',
                borderRadius: '30px',
                cursor: 'pointer',
                border: '1px solid #007BFF',
                color: '#007BFF',
              }}
            >
              Login
            </div>

            <div
              className="Demat-Account"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                textAlign: 'center',
                padding: '6px 14px',
                borderRadius: '30px',
                backgroundColor: '#007BFF',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Open Demat Account
            </div>
          </div>
        </div>

        
        <div className="hamburger" onClick={toggleSideNav} style={{ cursor: 'pointer' }}>
          <span className="bar" style={{ display: 'block', width: '30px', height: '4px', background: '#333', margin: '6px 0' }}></span>
          <span className="bar" style={{ display: 'block', width: '30px', height: '4px', background: '#333', margin: '6px 0' }}></span>
          <span className="bar" style={{ display: 'block', width: '30px', height: '4px', background: '#333', margin: '6px 0' }}></span>
        </div>
      </div>

     
      <div
        
        style={{
          position: 'fixed',
          top: '0',
          left: isMenuOpen ? '0' : '-250px',
          width: '250px',
          height: '100vh',
          borderRadius:'20px',
          backgroundColor: '#007BFF',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          transition: 'left 0.3s ease', 
          zIndex: '999',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            color: '#fff',
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <li>Invest</li>
          <li>Features</li>
          <li>Blogs</li>
          <li>Pricing</li>
          <li>Disclosure</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
