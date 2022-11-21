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
          <p className='info__text'>Hello!! I'm Shafinaz Shafique and I'm a Front end developer at ZeMind Gaming Studio in Toronto.</p>
          <p className='info__text'>
            For most of the projects, I used React as the JavaScript User Interface building library. But in a recent project with AWS and F1, 
            I was challenged to implement the app in THREE.js 
            which is a Library to create and display animated 3D graphics in a web browser. The process of learning and experimenting Three.js was absolutely 
            interesting and exciting. 
          </p>
          <p>
            I'm currently on an adventure with lit.html for a project with Google Chromobook.
          </p>
          <p className='info__text'>Some of the projects that I've worked on are: 
            <a href='https://toyotajoyride.com' target='_blank' rel='noreferrer'>Toyota</a>, 
            <a href='https://vwid4virtualdrive.com' target='_blank' rel='noreferrer'>VW</a>,
            <a href='https://www.youtube.com/watch?v=KLR8YWqamPo&t=1s' target='_blank' rel='noreferrer'>Hulu</a>,
            <a href='https://www.usopenhospitality.com/la' target='_blank' rel='noreferrer'>USGA Hospitality</a>,
            <a href='https://chromebookgaminghub.com/' target='_blank' rel='noreferrer'>Google Chromebook gaming hub</a>, 
          </p>
          {infoText.map((info, i) => <p key={i} className='info__text'>{info}</p>)}
        </div>
      </div>
    </section>
  )
}
export default Intro;