import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
import HeroImage from '../components/HeroImage';
import HowItWorks from '../components/HowItWorks';
import Graph from '../components/Graph';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
// import AppAppBar from './modules/views/AppAppBar';

function Home() {
  return (
    <React.Fragment>
      <HeroImage/>
      <HowItWorks/>
      <Graph/>
    </React.Fragment>
  );
}

export default withRoot(Home);
