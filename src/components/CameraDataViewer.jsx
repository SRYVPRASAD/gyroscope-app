import React, { useEffect, useState } from 'react';

const CameraDataViewer = () => {
  // Define state variables to hold position and rotation data
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  // Set up message listener when the component mounts
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'data') {
        const { position, rotation } = event.data;

        // Update state with received data
        setPosition(position);
        setRotation(rotation);

        // Log received data for debugging

      }
    };

    // Add event listener for messages from the parent iframe
    window.addEventListener('message', handleMessage);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div id="data-display">
      <p>Position:</p>
      <p>
        X: {position.x.toFixed(2)}, Y: {position.y.toFixed(2)}, Z: {position.z.toFixed(2)}
      </p>
      <p>Rotation:</p>
      <p>
        X: {rotation.x.toFixed(2)}, Y: {rotation.y.toFixed(2)}, Z: {rotation.z.toFixed(2)}
      </p>
    </div>
  );
};

export default CameraDataViewer;
