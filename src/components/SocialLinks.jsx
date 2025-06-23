import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '40%',
      left: '0',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <a href="https://github.com/KavyasriTammana-19" target="_blank" rel="noreferrer"
        style={linkStyle}><FaGithub size={30} /></a>
      <a href="https://www.linkedin.com/in/kavyasri-tammana-75355b333" target="_blank" rel="noreferrer"
        style={linkStyle}><FaLinkedin size={30} /></a>
      <a href="mailto:kavyasritammananvs@gmail.com" style={linkStyle}><FaEnvelope size={30} /></a>
    </div>
  );
};

const linkStyle = {
  margin: '8px 0',
  padding: '8px',
  background: '#343a40',
  color: 'white',
  textAlign: 'center',
  width: '40px',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px'
};

export default SocialLinks;
