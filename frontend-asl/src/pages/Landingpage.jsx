import React from 'react'
import { Emoticons, ASLInfoSection, EmergencySection, Features, FeedbackSection, HeroSection, MembersSection } from '../containers/index'
import AppWrap from '../wrapper/AppWrap'
import { Footer} from '../components/index'

const Landingpage = () => (
  <div>
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