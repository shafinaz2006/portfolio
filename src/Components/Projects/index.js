import React from 'react';
import Project from './Project.js';
import { projectData } from '../../data/siteContent';
import Heading from '../Heading.js';
import './style.css';

function Projects() {
  return (
    <section className='section projects' id='projects'>
      <Heading heading='Recent Projects' />
      <div className='project__list'>
      {projectData.map(project => <Project key={project.id} project={project} />)}
      </div>
    </section>
  );
}
export default Projects;