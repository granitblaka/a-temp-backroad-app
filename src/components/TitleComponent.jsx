const TitleComponent = ({ textOne, textTwo }) => {
  return (
    <div className='section-title'>
      <h2>
        {textOne} <span>{textTwo}</span>
      </h2>
    </div>
  );
};
export default TitleComponent;
