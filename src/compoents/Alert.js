import React from 'react';

const Alert = ({ message, onClose, backgroundColor, textColor, okButtonText }) => {
 return (
  <div className="alert-overlay">
   <div className="alert-box" style={{ backgroundColor: backgroundColor }}>
    <p style={{ color: textColor }}>{message}</p>
    <button onClick={onClose} style={{ backgroundColor: '#008CBA', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.2s' }}>{okButtonText}</button>
   </div>
  </div>
 );
};

export default Alert;
