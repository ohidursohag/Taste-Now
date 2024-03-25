import PropTypes from 'prop-types';

const SectionTitle = ({title,titleColored,className}) => {

  return (
    <div className={`${className} section-title`}>
       <span>{title}</span>
       <span>{titleColored}</span>
    </div>
  )
};

SectionTitle.propTypes = {
   title: PropTypes.string,
   titleColored: PropTypes.string,
   className: PropTypes.string,
};

export default SectionTitle;
