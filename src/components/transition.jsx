import { useEffect } from 'react';

function ScrollLink(props) {
    // eslint-disable-next-line react/prop-types
    const { href, children } = props
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(href);
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    };

    const link = document.querySelector(`a[href='${href}']`);
    link.addEventListener('click', handleClick);

    return () => {
      link.removeEventListener('click', handleClick);
    };
  }, [href]);

  return (
    <a href={href}>
      {children}
    </a>
  );
}

export default ScrollLink