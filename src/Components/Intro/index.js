import profilePic from '../../Assets/images/profile2.jpg';
import {infoText} from '../../data/siteContent';
import {introText} from '../../data/siteContent';
import Heading from '../Heading.js';
import './style.css';

const Intro= () => {  
  return(
    <section className='section intro'>
      <Heading heading='Shafinaz Shafique' />
      <h3 className='intro__title'>Front End Developer</h3>
      <h3 className='intro__title'>
        <a href='https://www.nrttech.com/' target='_blank' rel='noreferrer'>NRT Technology Corp.</a>
      </h3>
      <h3 className='intro__title'>Toronto, ON</h3>
      <div className='info'>
        <img className='info__pic' src={profilePic} alt='profile pic'/>
        <div className='info__right'>
          {introText.map((intro, i) => <p key={i} className='info__text'>{intro}</p>)}
          <p className='info__text'>Some of the projects that I've worked on are: 
            <a href='https://toyotajoyride.com' target='_blank' rel='noreferrer'>Toyota</a>, 
            <a href='https://vwid4virtualdrive.com' target='_blank' rel='noreferrer'>VW</a>,
            <a href='https://www.youtube.com/watch?v=KLR8YWqamPo&t=1s' target='_blank' rel='noreferrer'>Hulu</a>,
            <a href='https://www.usopenhospitality.com/la' target='_blank' rel='noreferrer'>USGA Hospitality</a>,
            <a href='https://chromebookgaminghub.com/' target='_blank' rel='noreferrer'>Google Chromebook gaming hub</a>, 
          </p>
          <p className='info__text'>CMS projects: 
            <a href='https://play.google.com/store/apps/details?id=com.gooseeyes.newapp&pli=1' target='_blank' rel='noreferrer'>GooseEyes</a>, 
            <a href='https://www.rawmengame.com/' target='_blank' rel='noreferrer'>Rawmen</a>, 
            <a href='https://play.google.com/store/apps/details?id=studio.biom.app' target='_blank' rel='noreferrer'>Biom</a>,
          </p>
          {infoText.map((info, i) => <p key={i} className='info__text'>{info}</p>)}
        </div>
      </div>
    </section>
  )
}
export default Intro;
