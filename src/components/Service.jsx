import { servicesData } from '../data';

const Service = () => {
  {
    return (
      <>
        {servicesData.map((element) => {
          return (
            <article id={element.id}>
              <span className='service-icon'>
                <i className={element.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{element.title}</h4>{' '}
              </div>
              <div className='service-info'>
                <p className='service-text'> {element.text}</p>
              </div>
            </article>
          );
        })}
      </>
    );
  }
};
export default Service;
