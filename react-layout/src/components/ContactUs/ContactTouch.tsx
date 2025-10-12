
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Card, Typography, Space } from 'antd';

const { Title, Text } = Typography;

// Helper component to style the inner contact cards
const ContactItem = ({ icon, title, content, iconColor }) => (
    // The inner Card component creates the distinct background/border of each item
    <Card 
        bordered={false} // Remove the default card border
        style={{ marginBottom: 16, boxShadow: 'none', padding: '0 8px' }} // Adjust styling for spacing and container look
        bodyStyle={{ padding: '16px 0', display: 'flex', alignItems: 'flex-start' }} // Flex alignment for icon and text
    >
        {/* The icon */}
        <div style={{ marginRight: 16, fontSize: '24px', color: iconColor }}>
            {icon}
        </div>
        
        {/* The text content */}
        <div>
            <Title level={5} style={{ margin: 0, fontWeight: 'bold' }}>
                {title}
            </Title>
            <Text style={{ color: '#595959' }}>{content}</Text>
        </div>
    </Card>
);

const ContactDetails = () => (
    // The main container Card (like the white box in the image)
    <Card 
        title="Get in Touch" 
        bordered={false} 
        style={{ maxWidth: 450, margin: '20px auto', borderRadius: 8 }}
        headStyle={{ borderBottom: 'none', padding: '16px 24px 0' }}
        bodyStyle={{ padding: '8px 24px 24px' }}
    >
        <Space direction="vertical" style={{ width: '100%' }}>
            {/* Email Item */}
            <ContactItem
                icon={<MailOutlined />}
                title="Email"
                content="info@eduapp.com"
                iconColor="#1890ff" // Blue color for email
            />

            {/* Phone Item */}
            <ContactItem
                icon={<PhoneOutlined />}
                title="Phone"
                content="+1 (555) 123-4567"
                iconColor="#52c41a" // Green color for phone
            />

            {/* Address Item */}
            <ContactItem
                icon={<EnvironmentOutlined />}
                title="Address"
                content="123 Education St, Learning City, LC 12345"
                iconColor="#fa541c" // Red/Orange color for address
            />
        </Space>
    </Card>
);

export default ContactDetails;