import React from 'react';
import profilePic from '../../Assets/images/profile2.jpg';
import {infoText} from '../../data/siteContent';
import Heading from '../Heading.js';
import './style.css';

function Intro(){  
  return(
    <section className='section intro'>
      <Heading heading='Shafinaz Shafique' />
      <h3 className='intro__title'>Front end Developer</h3>
      <h3 className='intro__title'>
        <a href='https://www.zemind.ca/#about' target='_blank' rel='noreferrer'>ZeMind Gaming studio</a>
      </h3>
      <h3 className='intro__title'>Toronto, ON</h3>
      <div className='info'>
        <img className='info__pic' src={profilePic} alt='profile pic'/>
        <div className='info__right'>
          <p className='info__text'>Hello!! I'm Shafinaz Shafique and work as a Front end developer at Zemind Gaming Studio in Toronto.</p>
          <p className='info__text'>
            I used React for most of the projects. For a project with AWS and F1, I learned THREE.js which is a JavaScript Library
            used to create and display animated 3D graphics in a web browser. I'm currently working on a project that is 
            using lit.html.
          </p>
          <p className='info__text'>Some of the projects that I've worked on are: 
            <a href='https://toyotajoyride.com' target='_blank' rel='noreferrer'>Toyota</a>, 
            <a href='https://vwid4virtualdrive.com' target='_blank' rel='noreferrer'>VW</a>,
            <a href='https://www.youtube.com/watch?v=KLR8YWqamPo&t=1s' target='_blank' rel='noreferrer'>Hulu</a>,
            <a href='https://www.usopenhospitality.com/la' target='_blank' rel='noreferrer'>USGA Hospitality</a>,
          </p>
          {infoText.map((info, i) => <p key={i} className='info__text'>{info}</p>)}
        </div>
      </div>
    </section>
  )
}
export default Intro;