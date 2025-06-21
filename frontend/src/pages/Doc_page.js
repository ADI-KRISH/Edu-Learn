import React, { useState } from "react";

const appStyle = {
  backgroundColor: 'black',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  color: 'white',
};

const features = [
  {
    title: 'Upload',
    description: 'File, audio, video',
    image_src: '/images/upload.png'
  },
  {
    title: 'Paste',
    description: 'YouTube, website, text',
    image_src: '/images/link.png'
  },
  {
    title: 'Record',
    description: 'Record class, video call',
    image_src: '/images/mic.png'
  }
];

function InputText() {
  const [text, setText] = useState('');

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      marginTop: '40px',
      position: 'relative'
    }}>
      <input
        type="text"
        placeholder="Learn anything"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          padding: '16px 20px',
          borderRadius: '24px',
          border: 'none',
          backgroundColor: '#333',
          color: 'white',
          fontSize: '16px',
          outline: 'none',
        }}
      />
    </div>
  );
}

function DocPage() {
  // Optional: Add hover logic with React state (for inline styling) if needed

  return (
    <div style={appStyle}>
      <div style={{
        textAlign: 'center',
        paddingBottom: '50px',
        fontSize: '30px'
      }}>
        What do you want to learn today?
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        maxWidth: '800px',
        width: '100%',
        marginBottom: '40px'
      }}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            <div style={{
              backgroundColor: '#333',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <img
                src={feature.image_src}
                alt={feature.title}
                style={{ width: '24px', height: '24px' }}
              />
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{feature.title}</h3>
            <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>{feature.description}</p>
          </div>
        ))}
      </div>

      <InputText />

      <button style={{
        marginTop: '24px',
        padding: '12px 24px',
        borderRadius: '24px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        Search
      </button>
    </div>
  );
}

export default DocPage;
