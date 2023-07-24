import { servicesData } from '../data';
import Service from './Service';
import TitleComponent from './TitleComponent';

const Services = () => {
  return (
    <>
      <section className='section services' id='services'>
        <TitleComponent textOne='our' textTwo='sercies'></TitleComponent>
        <div className='section-center services-center'>
          <article className='service'></article>
        </div>

        <div className='section-center services-center'>
          <Service />
        </div>
      </section>
    </>
  );
};
export default Services;
