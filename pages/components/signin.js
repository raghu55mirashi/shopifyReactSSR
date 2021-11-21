import React,{useCallback, useState} from 'react'
import {Page, Card, Button, TextField} from '@shopify/polaris';
import {ImportMinor} from '@shopify/polaris-icons';
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
    const primaryAction = {content: 'New product'};
    const secondaryActions = [{content: 'Import', icon: ImportMinor}];
    const [value, setValue] = useState('Jaded Pixel');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const navigate = useNavigate();

    return (
        <Page title="Account Setup" 
            breadcrumbs={[{content: 'Sample apps', onAction: ()=>{navigate('/')}}]} 
        >
            <Card sectioned>
                <TextField
                    label="Store name"
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                    />
                <br />
                <Button onClick={() => alert('Button clicked!')}>Submit</Button>
            </Card>
        </Page>
    )
}

export default SignIn;
