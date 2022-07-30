import React from 'react';
import BottomNav from './BottomNav';
import Home from './Home';
import Navigation from './Navigation';
import Listings from './Listings';
import FooterNav from './FooterNav';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
        <Navigation />
        <BottomNav />
        <Listings />
        <FooterNav />
        <Footer />
    </div>
  )
}

export default HomePage