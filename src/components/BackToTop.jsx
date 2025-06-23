import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <Button
        variant="secondary"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          zIndex: 1000,
          borderRadius: '50%',
          width: '50px',
          height: '50px',
        }}
      >
        ↑
      </Button>
    )
  );
};

export default BackToTop;
