import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',          // Flexbox to align items
    height: '100vh',          // Full viewport height
    width: '100vw',           // Full viewport width, without extra scroll
    padding: '20px',          // Padding around content
    boxSizing: 'border-box',  // Include padding in width calculation
    overflowX: 'hidden',      // Prevent horizontal scrollbar
  },
};

export default PageWrapper;
