import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import HeroImage from '../components/HeroImage';
import HowItWorks from '../components/HowItWorks';
import Graph from '../components/Graph';

function Home() {
  return (
    <React.Fragment>
      <HeroImage/>
      <HowItWorks/>
    </React.Fragment>
  );
}

export default withRoot(Home);
