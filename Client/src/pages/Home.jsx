import React from 'react'
import Hero from '../components/Hero'
import WorkedWithSection from '../components/WorkedWithSection'
import UXAuditService from '../components/UXAuditService'
import WordPressIndustrySolutions from '../components/WordPressIndustrySolutions'
import Ecommerce from '../components/Ecommerce'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import OutcomesSection from '../components/OutcomesSection'
import HiringProcessComponent from '../components/HiringProcessComponent'
import TestimonialsComponent from '../components/TestimonialsComponent'
const Home = () => {
  return (
    <>
      <Hero/>
      <WorkedWithSection/>
      <UXAuditService/>
      <WordPressIndustrySolutions/>
      <Ecommerce/>
      <Services/>
      <Portfolio/>
      <OutcomesSection/>
      <HiringProcessComponent/>
      <TestimonialsComponent/>
    </>
  )
}

export default Home
