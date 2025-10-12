import React from 'react';
import ContactHeader from '../components/ContactUs/ContactHeader';
import ContactMessage from '../components/ContactUs/ContactMessage';
import Touch from '../components/ContactUs/ContactTouch';
const ContactUs: React.FC = () => {
  return (
    <div style={{ margin: '0 4px' }}> {/* Outer Page Container */}
      
      <ContactHeader />
      
      <div 
        style={{
          display: 'flex',
          justifyContent: 'flex-start', // Aligns to the left
          gap: '40px',                 // Space between the two columns
          marginTop: '30px',
        }}
      >
        
        {/* === CARD 1: ContactMessage (The Form) === */}
        <div 
          style={{ 
            // Ensures this column takes up exactly 40%
            flex: '0 0 50%' 
          }}
        >
          <ContactMessage />
        </div>
        
        {/* === CARD 2: Touch (Contact Info) === */}
        <div 
          style={{ 
            // Ensures this column takes up exactly 40%
            flex: '0 0 45%' 
          }}
        >
          <Touch />
        </div>

      </div>

    </div>
  );
};

export default ContactUs;