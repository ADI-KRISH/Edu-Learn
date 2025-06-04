import React, { useState } from 'react';

function Login(){
    const [darkMode,setDarkMode] = useState(false);
    const toggleDarkMode =() => setDarkMode(!darkMode);
    const appStyle = {
        backgroundColor: darkMode? '#121212' : '#ffffff',
        color: darkMode? '#ffffff' : '#000000',
        minHeight:'100vh',
    paddingTop:'180px'  }
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
            <button style = {topRightButtonStyle}onClick={toggleDarkMode}> 
                { darkMode ? 'LightMode' : 'DarkMode'}

            </button>
                    <div 
                    style = {{display:'flex',justifyContent:'center' , minHeight:'70vh',textAlign:'center',flexDirection:'column',}}>
            <h1 style= {{}}>
                Welcome Back 
            </h1>
            <h4 style = {{}}>
                Login to your account to continue your journey
            </h4>
            <div>
                {EmailTextBox(darkMode)}
                {PasswordTextBox(darkMode)}
                {SubmitTextBox(darkMode)}
            </div>
        </div>

        </div>
    )
}
function EmailTextBox(darkMode){
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="text"
                placeholder="Enter your email"
                value={text}
                onChange={handleChange}
                style={{
                    width: '20%',
                    padding: '10px',
                    borderRadius: '15px',
                    backgroundColor: darkMode ? '#333' : '#f2f2f2',
                    color: darkMode ? '#fff' : '#000', // ✅ fixed text color
                    border: '1px solid',
                    fontSize: '18px',
                }}
            />
        </div>
    )
}
function PasswordTextBox(darkMode){
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="password"
                placeholder="Enter password"
                value={text}
                onChange={handleChange} // ✅ fixed case
                style={{
                    width: '20%',
                    padding: '10px',
                    borderRadius: '15px',
                    backgroundColor: darkMode ? '#333' : '#f2f2f2',
                    color: darkMode ? '#fff' : '#000',
                    border: '1px solid',
                    fontSize: '18px',
                }}
            />
        </div>
    )
}

function SubmitTextBox(darkMode){
    return (
        <div style ={{padding:'20px'}}>
            <button style ={{borderRadius:'15px'
                ,width:'20%',
                padding:'12px 20px',
               backgroundColor:darkMode ? 'grey' : 'white',
               color : darkMode ? 'white' :'black',
               border : '1px solid',
               fontSize : '19px'
            }}>
                Sign In
            </button>
        </div>
    )
}
export default Login;