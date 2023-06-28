import React from 'react'
import { BackGroundContainer, Emoticons, ASLInfoSection, EmergencySection, Features, FeedbackSection, HeroSection, MembersSection, BackgroundSection } from '../containers/index.js'
import AppWrap from '../wrapper/AppWrap'
import { Footer } from '../components/index'

const Landingpage = () => (
  <div>
    <HeroSection />
    <ASLInfoSection />
    <Emoticons />
    <Features />
    <BackgroundSection />
    <BackGroundContainer />
    <EmergencySection />
    <FeedbackSection />
    <MembersSection />
    <Footer />
  </div>


)

export default AppWrap(Landingpage)