import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Main from './component/main/main';
import Menu from './component/menu/menu';
import React, { useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ReactPixel from 'react-facebook-pixel';

function App() {
  useEffect(() => {
    // Advanced Matching
    const advancedMatching = {}; 
    // Options for pixel configuration
    const options = {
      autoConfig: true,  // set to true for automatic configuration
      debug: false,       // enable logs for debugging purposes
    };
    // Array of Facebook Pixel IDs
    const pixelIds = [
      '2211111362560772',
      '991914002498057',
      '3309982329295012'
    ];

    // Initialize each Facebook Pixel
    pixelIds.forEach(pixelId => {
      ReactPixel.init(pixelId, advancedMatching, options);
    });

    // Send page view event
    ReactPixel.pageView();
  }, []);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
      <YMInitializer accounts={[97170920]} options={{ webvisor: true }} />
    </div>
  );
}

export default App;
