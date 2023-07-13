import React from 'react'
import { BackGroundContainer, Emoticons, ASLInfoSection, EmergencySection, Features, FeedbackSection, HeroSection, MembersSection, BackgroundSection } from '../containers/index.js'
import AppWrap from '../wrapper/AppWrap'
import { Footer } from '../components/index'
import Hello from '../components/Hello.jsx'
const Landingpage = () => (
  <div>
    <HeroSection />
    <ASLInfoSection />
    <Emoticons />
    <Features />
    {/* <Hello/> */}
    <BackgroundSection />
    <BackGroundContainer />
    {/* <EmergencySection /> */}
    <FeedbackSection />
    <Footer />
  </div>


)

export default AppWrap(Landingpage)