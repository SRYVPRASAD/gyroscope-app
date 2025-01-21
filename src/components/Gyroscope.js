import React, { useEffect, useState } from 'react';

const Gyroscope = () => {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const handleOrientation = (event) => {
    const { alpha, beta, gamma } = event;
    setOrientation({ alpha, beta, gamma });
  };

  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div>
      <h1>Gyroscope Data</h1>
      <p>Alpha: {orientation.alpha}</p>
      <p>Beta: {orientation.beta}</p>
      <p>Gamma: {orientation.gamma}</p>
    </div>
  );
};

export default Gyroscope;