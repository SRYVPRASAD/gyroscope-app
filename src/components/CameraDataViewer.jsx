import React, { useEffect, useState } from "react";

const CameraDataViewer = () => {
  const [rotation, setRotation] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      // Validate the origin if necessary
      console.log("Received data:", event.data);

      // Update state with received data
      if (event.data.rotation && event.data.position) {
        setRotation(event.data.rotation);
        setPosition(event.data.position);
      }
    };

    // Add event listener for messages from parent
    window.addEventListener("message", handleMessage);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Child Iframe</h1>
      <p>Camera data from the user's mobile device received via the parent IFrame.</p>
      <div>
        <strong>Rotation:</strong> {rotation ? JSON.stringify(rotation) : "Waiting for data..."}
      </div>
      <div>
        <strong>Position:</strong> {position ? JSON.stringify(position) : "Waiting for data..."}
      </div>
    </div >
  );
};

export default CameraDataViewer;
