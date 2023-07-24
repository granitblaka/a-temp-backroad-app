import { socialLinks } from '../data';

const SocialLink = ({ parentClass, childClass }) => {
  return (
    <>
      <ul class={parentClass}>
        {socialLinks.map((socialLink) => {
          return (
            <li id={socialLink.id}>
              <a className={socialLink.href} target='_blank' class={childClass}>
                <i className={socialLink.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SocialLink;
