import React from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import HighlightsBar from '../components/HighlightsBar';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import WhyUs from '../components/WhyUs';
import ProcessSection from '../components/ProcessSection';
import CTABanner from '../components/CTABanner';

const AboutUs = () => (
  <>
    <Seo path="/about" />
    <PageHeader
      crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
      eyebrow="About the Firm"
      title="Partner-led advice,"
      accent="held to the ICAI standard."
      lede="Sakshi Yadav & Co. is a Chartered Accountancy firm in Sector 18, Noida — built for clients who want careful work, direct access and complete confidentiality."
    />
    <HighlightsBar />
    <AboutSection showLink={false} />
    <TeamSection />
    <WhyUs />
    <ProcessSection />
    <CTABanner />
  </>
);

export default AboutUs;
