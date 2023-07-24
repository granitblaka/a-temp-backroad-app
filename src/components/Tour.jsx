import { toursData } from '../data';

const Tour = () => {
  return (
    <>
      {toursData.map((element) => {
        return (
          <article className='tour-card' key={element.id}>
            <div className='tour-img-container'>
              <img src={element.img} className='tour-img' alt='' />
              <p className='tour-date'>{element.tourdate}</p>
            </div>
            <div className='tour-info'>
              <h4>{element.tourtitle}</h4>
              <p>{element.tourinfo}</p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  {element.country}
                </p>
                <p>{element.days}</p>
                <p>{element.price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default Tour;
