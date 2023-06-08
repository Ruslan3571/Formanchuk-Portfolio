import React from 'react';
import { FadeLoader } from 'react-spinners';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <FadeLoader className="my-fade-loader" color="#36d7b7" loading={true} />
    </div>
  );
};

export default LoadingAnimation;
