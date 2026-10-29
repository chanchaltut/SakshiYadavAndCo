import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';

const NotFound = () => (
  <>
    <Seo path="/404" />
    <PageHeader
      eyebrow="Error 404"
      title="This page could not"
      accent="be found."
      lede="The link may be outdated or mistyped. You can return to the home page or explore our practice areas."
    >
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">Return Home</Link>
        <Link to="/#services" className="btn-outline">View Practice Areas</Link>
      </div>
    </PageHeader>
  </>
);

export default NotFound;
