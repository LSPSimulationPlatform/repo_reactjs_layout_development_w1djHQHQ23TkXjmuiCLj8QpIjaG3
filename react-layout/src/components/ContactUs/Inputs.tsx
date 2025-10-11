import React from 'react'; // React core import required for JSX and component definitions
import { Form, Input } from 'antd'; // Ant Design: Form controls, Input field
import { UserOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons'; // Icons

const Inputs: React.FC = () => { // Define NameFields as a functional React component
  return (
    <div style={{ display: 'block' }}>
      {/* The original Col components (xs={24} sm={12}) forced these items 
        side-by-side on larger screens. Removing them forces full width (stacking).
      */}
      
      {/* 1. Name Field (Now full width) */}
      <Form.Item
        label="Name" /* Label displayed above the input */
        name="Name" /* Key used by the parent AntD Form */
        rules={[ 
          { required: true, message: 'Your full name' }, 
          { min: 2, message: 'Name must be at least 2 characters!' }, 
        ]}
      >
        <Input 
          prefix={<UserOutlined />} 
          placeholder="Your full name" 
          size="large"
        />
      </Form.Item>

      {/* 2. Email Field (Now full width) */}
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          { required: true, message: 'your.email@example.com' },
          { min: 2, message: 'Email must be at least 2 characters!' },
        ]}
      >
        <Input 
          prefix={<MailOutlined />}
          placeholder="your.email@example.com"
          size="large"
        />
      </Form.Item>

      {/* 3. Subject Field (Now full width) */}
      <Form.Item
        label="Subject"
        name="Subject" // Changed name from "Email" to "Subject" for correct form data structure
        rules={[
          { required: true, message: 'Please write subject' },
          { min: 2, message: 'Subject must be at least 2 characters!' },
        ]}
      >
        <Input 
          prefix={<FileTextOutlined />}
          placeholder="What's this about?"
          size="large"
        />
      </Form.Item>
      
    </div>
  );
};

export default Inputs;