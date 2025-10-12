import React from 'react';
import { Form, Input as AntdInput, Col, Row, Card,Button } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

const ContactInputs: React.FC = () => {
  return (
    <Card title="Send us a Message">
        <Form
          layout="vertical" // <-- ensures labels appear above inputs
          name="contactForm"
        >
          <Row gutter={[16, 16]}>
            {/* Name */}
            <Col xs={24} sm={24}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: 'Please enter your full name' },
                  { min: 2, message: 'Name must be at least 2 characters!' },
                ]}
              >
                <AntdInput
                  prefix={<UserOutlined />}
                  placeholder="Your full name"
                  size="large"
                />
              </Form.Item>
            </Col>

            {/* Email */}
            <Col xs={24} sm={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email address' },
                ]}
              >
                <AntdInput
                  prefix={<MailOutlined />}
                  placeholder="your.email@example.com"
                  size="large"
                />
              </Form.Item>
            </Col>

            {/* Subject */}
            <Col xs={24}>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: 'Please enter a subject' },
                  { min: 2, message: 'Subject must be at least 2 characters!' },
                ]}
              >
                <AntdInput
                  prefix={<MessageOutlined />}
                  placeholder="What's this about?"
                  size="large"
                />
              </Form.Item>
            </Col>

            {/* Message */}
            <Col xs={24}>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: 'Please enter your message' },
                  { max: 500, message: 'Message cannot exceed 500 characters' },
                ]}
              >
                <AntdInput.TextArea
                  rows={5}
                  placeholder="Tell us more about your message or feedback..."
                  showCount
                  maxLength={500}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Button style={{
          backgroundColor: '#007FFF',color: 'white', border:'none',width: '100%'
        }}>Send Message</Button>
      </Card>
  );
};

export default ContactInputs;
