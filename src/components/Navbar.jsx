import logo from '../assets/images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLink parentClass='nav-links' childClass='nav-link'></PageLink>
        <SocialLink parentClass='nav-icons' childClass='nav-icon'></SocialLink>
      </div>
    </nav>
  );
};
export default Navbar;
