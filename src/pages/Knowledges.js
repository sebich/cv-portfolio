import React from 'react';
import DegreesAnCertifications from '../components/knowledges/DegreesAnCertifications';
import Experiences from '../components/knowledges/Experiences';
import Formations from '../components/knowledges/Formations';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import SoftSkills from '../components/knowledges/SoftSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experiences />
        <Formations />
        <DegreesAnCertifications />
        <SoftSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
