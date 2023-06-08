import React, { useState, useEffect, useCallback } from 'react';

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (
      !showScroll &&
      (window.pageYOffset > 400 ||
        window.innerHeight + window.scrollY >= document.body.offsetHeight)
    ) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    showScroll && (
      <i
        className="fa fa-arrow-circle-up scrollTop"
        onClick={scrollTop}
        style={{
          fontSize: '60px',
          color: 'red',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'linear',
          transitionDelay: '0s',
          zIndex: '100',
        }}
      ></i>
    )
  );
};

export default ScrollButton;
