// AnimatedComponent.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedComponent.css'; // Create this CSS file

const AnimatedComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`animated-container ${inView ? 'animate' : ''}`}>
      <h2>Your Title</h2>
      <p>Your content goes here</p>
    </div>
  );
};

export default AnimatedComponent;
