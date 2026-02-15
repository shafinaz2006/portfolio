import Heading from '../Heading.js';
import ExperienceItem from './ExperienceItem.js';
import {experienceData} from '../../data/siteContent';

function Experience(){
  return(
    <section className='section education' id='experience'>
      <Heading heading='Experience' />
      <ul className='education__list'>
        {experienceData.map(experience => <ExperienceItem key={experience.id} experience={experience} />)}
      </ul>
    </section>
  );
}
export default Experience;