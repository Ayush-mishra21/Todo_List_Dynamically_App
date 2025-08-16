import React from 'react';

export const Footer = () => {
  const footerStyle = {
    marginLeft: '700px',
    backgroundColor: '#61dafb',
    marginRight: '620px'
  };

  return (
    <footer className="footer">
      <p className="text-center mb-0" style={footerStyle}>
        Copyright &copy; MyTodolist.com
      </p>
    </footer>
  );
};
