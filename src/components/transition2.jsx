import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function SmoothScroll({ targetId, duration, children, ...rest }) {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const startPosition = window.pageYOffset;
        const endPosition = targetElement.getBoundingClientRect().top + startPosition;

        let start;

        const animateScroll = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percent = Math.min(progress / duration, 1);
          window.scrollTo(0, startPosition + (endPosition - startPosition) * percent);

          if (progress < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    };

    const links = document.querySelectorAll(`a[href='${targetId}']`);
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    const buttons = document.querySelectorAll(`button[data-target='${targetId}']`);
    buttons.forEach(button => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });

      buttons.forEach(button => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, [targetId, duration]);

  return React.cloneElement(children, { ...rest });
}

SmoothScroll.propTypes = {
  targetId: PropTypes.string.isRequired,
  duration: PropTypes.number,
  children: PropTypes.element.isRequired,
};

SmoothScroll.defaultProps = {
  duration: 800,
};

export default SmoothScroll;