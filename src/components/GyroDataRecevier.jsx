import React, { useEffect, useState } from 'react';

const GyroscopeDataReceiver = () => {
  const [gyroData, setGyroData] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(() => {
    const handleMessage = (event) => {
      // const trustedOrigin = "https://your-parent-origin.com"; // Replace with the parent's origin
      // if (event.origin !== trustedOrigin) {
      //   console.warn("Untrusted origin:", event.origin);
      //   return;
      // }

      const data = event.data;

      if (data.type === 'gyroscope') {
        // Update gyroscope data
        setGyroData({
          alpha: data.alpha,
          beta: data.beta,
          gamma: data.gamma,
        });
      } else if (data.type === 'data') {
        // Handle general data messages if needed
        console.log("Data received:", data.content);
      } else if (data.type === 'ack') {
        // Update connection status
        setConnectionStatus('Connected');
      }
    };

    // Add event listener for postMessage
    window.addEventListener('message', handleMessage);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <div>
        <h2>Gyroscope Data</h2>
        <p>
          <strong>Connection Status:</strong> {connectionStatus}
        </p>
        <p>
          <strong>Alpha (Z-axis):</strong> {gyroData.alpha || 'N/A'}°
        </p>
        <p>
          <strong>Beta (X-axis):</strong> {gyroData.beta || 'N/A'}°
        </p>
        <p>
          <strong>Gamma (Y-axis):</strong> {gyroData.gamma || 'N/A'}°
        </p>
      </div>

    </div>
  );
};

export default GyroscopeDataReceiver;
