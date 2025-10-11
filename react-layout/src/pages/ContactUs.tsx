import React from 'react';
import ContactHeader from '../components/ContactUs/ContactHeader';
import ContactMessage from '../components/ContactUs/ContactMessage';

const ContactUs: React.FC = () => { // Define Contact as a React functional component (no props expected)
  return (
    <div> {/* Page container: groups all Contact page sections */}
        <ContactHeader />
        <ContactMessage />
    </div>
  );
};

export default ContactUs; // Default export so routing/pages can import and render the About page