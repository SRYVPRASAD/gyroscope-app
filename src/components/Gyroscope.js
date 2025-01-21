import React, { useEffect, useState } from 'react';

const Gyroscope = () => {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });
  const [isSupported, setIsSupported] = useState(true);

  const handleOrientation = (event) => {
    console.log('Orientation Event:', event); // Log the event
    const { alpha, beta, gamma } = event;
    setOrientation({ alpha, beta, gamma });
  };

  useEffect(() => {
    if (!window.DeviceOrientationEvent) {
      setIsSupported(false); // Device does not support the API
      return;
    }

    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 13+ devices require permission
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          } else {
            setIsSupported(false); // Permission denied
          }
        })
        .catch(console.error);
    } else {
      // Non-iOS devices
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div>
      <h1>Gyroscope Data</h1>
      {isSupported ? (
        <>
          <p>Alpha: {orientation.alpha}</p>
          <p>Beta: {orientation.beta}</p>
          <p>Gamma: {orientation.gamma}</p>
        </>
      ) : (
        <p>Gyroscope is not supported on this device or permission was denied.</p>
      )}
    </div>
  );
};

export default Gyroscope;