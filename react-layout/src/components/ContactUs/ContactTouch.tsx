import { MailTwoTone, PhoneTwoTone, EnvironmentTwoTone } from '@ant-design/icons';

import { Card,Typography } from 'antd'; // Optional: for spacing them out
 const { Text,Title } = Typography;


const Touch: React.FC = () => (

    <Card title="Get in Touch">
       <Card 
        bordered={true} // Remove the default card border
        style={{ marginBottom: 16, boxShadow: 'none', padding: '0 8px' }} // Adjust styling for spacing and container look
        bodyStyle={{ padding: '16px 0', display: 'flex', alignItems: 'flex-start' }} // Flex alignment for icon and text
    >
        {/* The icon */}
        <div style={{ marginRight: 16, fontSize: '24px', color: '#1890ff' }}>
             <MailTwoTone  twoToneColor="#eb2f96" />
        </div>
        
        {/* The text content */}
        <div>
            <Title level={5} style={{ margin: 0, fontWeight: 'bold' }}>
              Email
            </Title>
            <Text style={{ color: '#595959' }}>info@eduapp.com</Text>
        </div>
    </Card>


       <Card 
        bordered={true} // Remove the default card border
        style={{ marginBottom: 16, boxShadow: 'none', padding: '0 8px' }} // Adjust styling for spacing and container look
        bodyStyle={{ padding: '16px 0', display: 'flex', alignItems: 'flex-start' }} // Flex alignment for icon and text
    >
        {/* The icon */}
        <div style={{ marginRight: 16, fontSize: '24px', color: '#52c41a' }}>
             <PhoneTwoTone  twoToneColor="#1890ff" />
        </div>
        
        {/* The text content */}
        <div>
            <Title level={5} style={{ margin: 0, fontWeight: 'bold' }}>
              Phone
            </Title>
            <Text style={{ color: '#595959' }}>+1 (555) 123-4567</Text>
        </div>
    </Card>

        <Card 
        bordered={true} // Remove the default card border
        style={{ marginBottom: 16, boxShadow: 'none', padding: '0 8px' }} // Adjust styling for spacing and container look
        bodyStyle={{ padding: '16px 0', display: 'flex', alignItems: 'flex-start' }} // Flex alignment for icon and text
    >
        {/* The icon */}
        <div style={{ marginRight: 16, fontSize: '24px', }}>
             <EnvironmentTwoTone  twoToneColor="#52c41a" />
        </div>
        
        {/* The text content */}
        <div>
            <Title level={5} style={{ margin: 0, fontWeight: 'bold' }}>
              Address
            </Title>
            <Text style={{ color: '#595959' }}>123 Education St, Learning City, LC 123456</Text>
        </div>
    </Card>

<div>
    <h2 style={{ margin:'0 0 10px 0px'}}>About This Contact Page</h2>
    <Text>This contact page demonstrates:</Text><br /><br />
    <Text>Ant Design Form components and validation Form handling with onFinish callback Message notifications using Ant Design's message API Responsive layout with Row and Col components Icon integration from Ant Design</Text>
    </div>

    </Card>

);



export default Touch;