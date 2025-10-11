import React from 'react'; // Import React to enable JSX and React types (required by some toolchains)
import { Typography } from 'antd'; // Import Ant Design Typography primitives for semantic text components

const { Title, Paragraph } = Typography; // Destructure Title and Paragraph for concise JSX usage

const ContactHeader: React.FC = () => { // Define AboutHeader as a React functional component (no props)
  return (
    <> {/* Fragment: groups multiple children without adding an extra DOM node */}
      <Title level={2}>Contact Us</Title> {/* H2: primary page heading describing the page */}
      <Paragraph>
      Have question about React Router or this education app? We'd love to hear from you!
      </Paragraph> {/* Paragraph: explanatory text summarizing app purpose and architecture */}
    </>
  );
};

export default ContactHeader; // Default export so other modules (About page) can import and render this header