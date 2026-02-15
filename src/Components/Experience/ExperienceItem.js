import officelIcon from '../../Assets/icons/briefcase.png';

const ExperienceItem = ({ experience }) =>{
  return(
    <li className='education__item' key={experience.title}>
      <img className='education__icon' src={officelIcon} alt='office icon' />
      <div>
        <p className='education__title'>{experience.title}</p>
        <p className='education__desc'>{experience.name}</p>
        <p className='education__date'>{experience.date}</p>
      </div>
    </li>
  );
}

export default ExperienceItem;