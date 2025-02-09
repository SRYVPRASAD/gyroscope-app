import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

const ObjectViewer = () => {
  const [orientation, setOrientation] = useState({
    alpha: 0, // rotation around z-axis (compass)
    beta: 0,  // rotation around x-axis (front/back)
    gamma: 0, // rotation around y-axis (left/right)
  });

  // Effect to capture device orientation events
  useEffect(() => {
    const handleOrientation = (event) => {
      // Update the orientation state with the gyroscope data
      setOrientation({
        alpha: event.alpha || 0,
        beta: event.beta || 0,
        gamma: event.gamma || 0,
      });
    };

    const requestPermission = async () => {
      // For iOS 13+ devices, we need to request permission to access device orientation
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === "granted") {
            // If permission is granted, start listening for orientation events
            window.addEventListener("deviceorientation", handleOrientation);
          } else {
            console.error("Permission to access device orientation was denied.");
          }
        } catch (error) {
          console.error("Error requesting permission:", error);
        }
      } else {
        // For non-iOS devices, we can directly listen to the event
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    // Request permission and start listening for orientation events
    requestPermission();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  // Use the device orientation values to move the object
  const xPos = orientation.beta / 90;  // Mapping beta (front/back) to x-axis
  const yPos = orientation.gamma / 90; // Mapping gamma (left/right) to y-axis
  const zPos = -orientation.alpha / 90; // Mapping alpha (compass) to z-axis

  return (
    <>
      <div>
        <p>Orientation Data:</p>
        <p>
          Alpha (Z-Axis): {orientation.alpha}, Beta (X-Axis): {orientation.beta}, Gamma (Y-Axis): {orientation.gamma}
        </p>
      </div>

      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} color="red" />

        {/* 3D object (cube) */}
        <mesh position={[xPos, yPos, zPos]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial color="skyblue" />
        </mesh>
      </Canvas>
    </>
  );
};

export default ObjectViewer;
