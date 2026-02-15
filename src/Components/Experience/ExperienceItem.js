import schoolIcon from '../../Assets/icons/school_black.svg';

const ExperienceItem = ({ experience }) =>{
  return(
    <li className='education__item' key={experience.title}>
      <img className='education__icon' src={schoolIcon} alt='office icon' />
      <div>
        <p className='education__title'>{experience.title}</p>
        <p className='education__desc'>{experience.desc}</p>
        <p className='education__date'>{experience.date}</p>
      </div>
    </li>
  );
}

export default ExperienceItem;