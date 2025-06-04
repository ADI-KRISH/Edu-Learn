import React from 'react';

function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    overflowY: 'auto',
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
    <div style={appStyle}>
      <button style={topRightButtonStyle} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        flexDirection: 'column',
        paddingTop: '60px',
      }}>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>AI Tutor</h1>
        <p>Welcome to the AI Tutor!</p>
        <p>Upload document and your chosen avatar will answer your questions</p>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          {get_started({darkMode})}
          {see_features({darkMode})}
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {features({ darkMode })}
      </div>
    </div>
  );
}

function get_started({darkMode}) {
  return (
    <button style={{
      backgroundColor: darkMode ? 'black' : 'white' ,
      color: darkMode  ? 'white' : 'black',
      fontSize: '14px',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      border: '2px solid black',

    }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
      Get Started
    </button>
  );
}

function see_features({darkMode}) {
  return (
    <button style={{
      backgroundColor: darkMode ? 'white' : 'black',
      color: darkMode ? 'black' : 'white',
      fontSize: '14px',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      border: '2px solid black',
    }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
      See Features
    </button>
  );
}

function features({ darkMode }) {
  const featuresList = [
    {
      title: "Upload any Document",
      description: "From PDFs and YouTube videos to slides and even recorded lectures, learn everything your way."
    },
    {
      title: "Test your Knowledge",
      description: "Create personalized exams, get answer breakdowns, and track your progress."
    },
    {
      title: "Talk with AI avatar",
      description: "Talk with AI avatar and get answers to your questions."
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}>
        {featuresList.map((feature, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: darkMode ? '#1e1e1e' : '#f5f5f5',
              color: darkMode ? '#fff' : '#000',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: darkMode
                ? '0 2px 8px rgba(255,255,255,0.1)'
                : '0 2px 8px rgba(0,0,0,0.05)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{feature.title}</h3>
            <p style={{ marginTop: '10px' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;