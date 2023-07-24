import { toursData } from '../data';
import TitleComponent from './TitleComponent';
import tour1 from '../assets/images/tour-1.jpeg';
import Tour from './Tour';

const Tours = () => {
  return (
    <>
      <section className='section' id='tours'>
        <TitleComponent textOne='featured' textTwo='tours'></TitleComponent>

        <div className='section-center featured-center'>
          <Tour />
        </div>
      </section>
    </>
  );
};
export default Tours;
