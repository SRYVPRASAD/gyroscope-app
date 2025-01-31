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
    // Request permission for motion sensors on iOS 13+ devices
    const requestPermission = async () => {
      if (window.DeviceOrientationEvent) {
        // For iOS 13 and above, request permission
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
          try {
            const permission = await DeviceOrientationEvent.requestPermission();
            if (permission === "granted") {
              startListening();
            } else {
              console.error("Permission not granted for device orientation.");
            }
          } catch (error) {
            console.error("Error requesting permission:", error);
          }
        } else {
          // For non-iOS devices, we can directly listen to the event
          startListening();
        }
      }
    };

    // Start listening to orientation event
    const startListening = () => {
      const handleOrientation = (event) => {
        console.log("Orientation data:", event); // Debugging log
        setOrientation({
          alpha: event.alpha || 0,
          beta: event.beta || 0,
          gamma: event.gamma || 0,
        });
      };

      window.addEventListener("deviceorientation", handleOrientation);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    };

    // Request permission to start listening
    requestPermission();

  }, []);

  // Map orientation values to position of the object with better scaling
  const xPos = orientation.beta / 90;  // Use beta for x-axis movement, scale it as needed
  const yPos = orientation.gamma / 90; // Use gamma for y-axis movement, scale it as needed
  const zPos = -orientation.alpha / 90; // Use alpha for z-axis movement, scale it as needed

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
