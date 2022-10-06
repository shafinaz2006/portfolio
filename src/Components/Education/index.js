import React from 'react';
import Heading from '../Heading.js';
import EducationItem from './EducationItem.js';
import {educationData} from '../../data/siteContent';

function Education(){
  return(
    <section className='section education' id='education'>
      <Heading heading='Education' />
      <ul className='education__list'>
        {educationData.map(education => <EducationItem key={education.id} education={education} />)}
      </ul>
    </section>
  );
}
export default Education;