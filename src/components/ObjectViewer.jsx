import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const ObjectViewer = () => {
  // State for storing device orientation data
  const [orientation, setOrientation] = useState({
    alpha: 0, // rotation around z-axis
    beta: 0,  // rotation around x-axis
    gamma: 0, // rotation around y-axis
  });

  // Effect to capture device orientation events
  useEffect(() => {
    const handleOrientation = (event) => {
      // Update orientation state with the device's rotation values
      setOrientation({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    // Listen for the device orientation event
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  // Map orientation values to position of the object
  const xPos = orientation.beta / 90;  // Use beta for x-axis movement
  const yPos = orientation.gamma / 90; // Use gamma for y-axis movement
  const zPos = -orientation.alpha / 90; // Use alpha for z-axis movement

  return (
    <Canvas>
      <mesh position={[xPos, yPos, zPos]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
  );
};
