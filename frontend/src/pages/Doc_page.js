import React from "react";

const appStyle = {
  backgroundColor: 'black',
  minHeight: '150vh',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // changed from center to start for natural flow
  paddingTop: '170px', // gives spacing from top
  fontSize: '15px', 
};

const features = [
  {
    title: 'Upload',
    description: 'File, Audio, Video'
  },
  {
    title: 'Paste',
    description: 'YouTube, Website, Text'
  },
  {
    title: 'Record',
    description: 'Record class, Video call'
  }
];

const featureContainerStyle = {
  marginTop: '10px',
  padding: '20px',
  width: '100%',
  maxWidth: '550px'
};

function DocPage() {
  return (
    <div style={appStyle}>
      <h1 style={{ color: 'white' }}>What do you want to learn today?</h1>
      
      <div style={featureContainerStyle}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(10px, 1fr))',
            gap: '10px',
            fontSize: '15px',
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                paddingTop: '10px',
                backgroundColor: '#333',
                color: 'white',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 2px 8px rgba(255,255,255,0.1)',
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocPage;
