import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <>
      <footer className='section footer'>
        <PageLink
          parentClass='footer-links'
          childClass='footer-link'
        ></PageLink>
        <SocialLink
          parentClass='footer-icons'
          childClass='footer-icon'
        ></SocialLink>

        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
