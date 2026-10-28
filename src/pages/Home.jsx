import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import HighlightsBar from '../components/HighlightsBar';
import AboutSection from '../components/AboutSection';
import PracticeTicker from '../components/PracticeTicker';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import WhyUs from '../components/WhyUs';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const Home = () => (
  <>
    <Seo path="/" />
    <Hero />
    <HighlightsBar />
    <AboutSection />
    <PracticeTicker />
    <ServicesSection />
    <ProcessSection />
    <WhyUs />
    <TeamSection />
    <FAQSection />
    <CTABanner />
  </>
);

export default Home;
