import React from 'react';
import BottomNav from './BottomNav';
import Home from './Home';
import Navigation from './Navigation';
import Listings from './Listings';
import FooterNav from './FooterNav';

const HomePage = () => {
  return (
    <div>
        <Navigation />
        <BottomNav />
        <Listings />
        <FooterNav />
    </div>
  )
}

export default HomePage