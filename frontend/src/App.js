import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
  };
  const topRightButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#333' : '#f2f2f2',
    color: darkMode ? '#fff' : '#000',
  };
  return (
    <div style = {appStyle}>
      <button style={topRightButtonStyle} onClick={toggleDarkMode}
      >
      {darkMode ? 'Light Mode' : ' Dark Mode'}
      </button>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '65vh',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>AI Tutor</h1>
        <p>Welcome to the AI Tutor!</p>
        <p>Upload document and your chosen avatar will answer your questions</p>

        {/* Centered button container below text */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '30px',
          gap: '20px'
        }}>
          {get_started()}
          {see_features()}
        </div>
      </div>
    </div>
    </div>
    
  );
}

function get_started() {
  return (
    <button style={{
      backgroundColor: 'black',
      color: 'white',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'opacity 0.2s',
      opacity: 0.8,
      textAlign: 'center',
      border: 'none'
    }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
      Get Started
    </button>
  );
}

function see_features() {
  return (
    <button style={{
      backgroundColor: 'white',
      color: 'black',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'opacity 0.2s',
      opacity: 0.8,
      textAlign: 'center',
      border: '2px solid black'
    }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
      See Features
    </button>
  );
}


export default App;
