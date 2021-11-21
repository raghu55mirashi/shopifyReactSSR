import React from 'react';
import App from './app';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import {BrowserRouter} from 'react-router-dom';

const Index = () =>(
    <BrowserRouter>
        <AppProvider i18n={enTranslations}>
         <App />
        </AppProvider>
    </BrowserRouter>
);

export default Index;