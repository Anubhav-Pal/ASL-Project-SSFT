import React from 'react'
// import '../style.css'
import { Emoticons, ASLInfoSection, EmergencySection, Features, FeedbackSection, HeroSection, MembersSection } from '../containers/index'
import AppWrap from '../wrapper/AppWrap'
import { Footer, Navbar } from '../components/index'

const Landingpage = () => (
  <div>
    <Navbar/>
    <HeroSection />
    <ASLInfoSection />
    <Emoticons />
    <Features />
    <EmergencySection />
    <FeedbackSection />
    <MembersSection />
    <Footer />
  </div>


)

export default AppWrap(Landingpage)