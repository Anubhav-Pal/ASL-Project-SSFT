import React from 'react'
import '../style.css'
import { ASLInfoSection, EmergencySection, Features, FeedbackSection, HeroSection, MembersSection } from '../containers/index'
import { Footer } from '../components/index'

const Landingpage = () => (
  <div>
    <HeroSection />
    <ASLInfoSection />
    <Features />
    <EmergencySection />
    <FeedbackSection />
    <MembersSection />
    <Footer />
  </div>


)

export default Landingpage