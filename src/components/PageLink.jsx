import { pageLinks } from '../data';

const PageLink = ({ parentClass, childClass }) => {
  return (
    <>
      <ul className={parentClass}>
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} className={childClass}>
                {pageLink.text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default PageLink;
