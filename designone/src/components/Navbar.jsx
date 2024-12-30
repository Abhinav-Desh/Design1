import logo from '../assets/download.png';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Navbar = () => {
  return (
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
          display: 'flex',
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
          placeholder="Search..."
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
          display: 'flex',
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
          <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Invest</li> 
          <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Features</li> 
          <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Blogs</li> 
          <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Pricing</li> 
          <li style={{ fontSize: '20px', cursor: 'pointer', margin: '0 10px' }}>Disclosure</li> 
        </ul>
      </div>

     
      <div
        className="actions"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '25%',
        }}
      >
        
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
          <SupportAgentIcon sx={{ width: '24px', height: '24px', color: '#007BFF' }} />
        </div>

        
        <div
          className="login"
          style={{
            fontSize: '20px',
            fontWeight: '600',
            padding: '6px 14px',
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
  );
};

export default Navbar;
