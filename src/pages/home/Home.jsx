import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperty/FeaturedProperties'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className='home-title'>Browse by Property Type</h1>
        <PropertyList />
        <h1 className='home-title'>Places our guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
}

export default Home