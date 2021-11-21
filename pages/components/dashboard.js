import React from 'react';
import {Button, Card} from '@shopify/polaris';
import {useNavigate} from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div style={{textAlign: 'center'}}>
            <Card.Section>
                <img src="/sample.jpeg" width="70" height="40" />
                <div className="main">Click to Go Next --</div>
                <Button onClick={()=>navigate('/signin')}>Next</Button>
            </Card.Section>
        </div>
    )
}
export default Dashboard;