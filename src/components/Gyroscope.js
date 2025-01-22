import React, { useEffect, useState } from "react";

// Plain JavaScript to capture gyroscope data and send it to React
// (function () {
//   const sendGyroData = (data) => {
//     window.dispatchEvent(new CustomEvent("gyroscopeData", { detail: data }));
//   };

//   const handleOrientation = (event) => {
//     if (!event) return;
//     const data = {
//       alpha: event.alpha || 0, // Z-axis rotation
//       beta: event.beta || 0,   // X-axis rotation
//       gamma: event.gamma || 0, // Y-axis rotation
//     };
//     sendGyroData(data);
//   };

//   const initGyroscope = () => {
//     if (typeof DeviceOrientationEvent.requestPermission === "function") {
//       DeviceOrientationEvent.requestPermission()
//         .then((permissionState) => {
//           if (permissionState === "granted") {
//             window.addEventListener("deviceorientation", handleOrientation, true);
//           } else {
//             console.error("Gyroscope permission not granted.");
//           }
//         })
//         .catch((err) => {
//           console.error("Error requesting gyroscope permission:", err);
//         });
//     } else {
//       // Add listener for non-iOS browsers
//       window.addEventListener("deviceorientation", handleOrientation, true);
//     }
//   };

//   // Initialize the gyroscope after user interaction
//   window.addEventListener("DOMContentLoaded", () => {
//     const permissionButton = document.createElement("button");
//     permissionButton.innerText = "Enable Gyroscope";
//     permissionButton.style.padding = "10px 20px";
//     permissionButton.style.backgroundColor = "#007BFF";
//     permissionButton.style.color = "#fff";
//     permissionButton.style.border = "none";
//     permissionButton.style.borderRadius = "5px";
//     permissionButton.style.cursor = "pointer";
//     permissionButton.style.display = "block";
//     permissionButton.style.margin = "20px auto";
//     document.body.appendChild(permissionButton);

//     permissionButton.addEventListener("click", () => {
//       initGyroscope();
//       permissionButton.style.display = "none"; // Hide the button after enabling
//     });
//   });
// })();


const GyroscopeDataViewer = () => {
  const [gyroscopeData, setGyroscopeData] = useState({ alpha: 0, beta: 0, gamma: 0 });
  // const [allowGyro, setAllowGyro] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      // Ensure the message contains gyroscope data
      if (event.data && event.data.alpha !== undefined) {
        setGyroscopeData(event.data);
      }
    };

    // Listen for messages from the parent window
    window.addEventListener("message", handleMessage);

    return () => {
      // Cleanup the event listener
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // useEffect(() => {
  //   const handleGyroData = (event) => {
  //     setGyroscopeData(event.detail);
  //   };

  //   // Listen for the custom event
  //   window.addEventListener("gyroscopeData", handleGyroData);

  //   return () => {
  //     // Cleanup the listener
  //     window.removeEventListener("gyroscopeData", handleGyroData);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleOrientation = (event) => {
  //     setGyroscopeData({
  //       alpha: event.alpha || 0, // Rotation around z-axis
  //       beta: event.beta || 0,   // Rotation around x-axis
  //       gamma: event.gamma || 0, // Rotation around y-axis
  //     });
  //   };

  //   if (allowGyro) {
  //     // Request permission on iOS
  //     if (typeof DeviceOrientationEvent.requestPermission === "function") {
  //       DeviceOrientationEvent.requestPermission()
  //         .then((permissionState) => {
  //           if (permissionState === "granted") {
  //             window.addEventListener("deviceorientation", handleOrientation, true);
  //           }
  //         })
  //         .catch(console.error);
  //     } else {
  //       // Add listener for other browsers
  //       window.addEventListener("deviceorientation", handleOrientation, true);
  //     }
  //   } else {
  //     window.removeEventListener("deviceorientation", handleOrientation, true);
  //   }

  //   return () => {
  //     window.removeEventListener("deviceorientation", handleOrientation, true);
  //   };
  // }, [allowGyro]);

  // const toggleGyro = () => setAllowGyro((prev) => !prev);

  return (
    // <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
    //   <h1>Gyroscope Data Viewer</h1>
    //   <button
    //     style={{
    //       padding: "10px 20px",
    //       backgroundColor: allowGyro ? "red" : "green",
    //       color: "white",
    //       border: "none",
    //       borderRadius: "5px",
    //       cursor: "pointer",
    //     }}
    //     onClick={toggleGyro}
    //   >
    //     {allowGyro ? "Disable Gyro" : "Enable Gyro"}
    //   </button>
    //   <div style={{ marginTop: "20px", fontSize: "18px" }}>
    //     <p>Alpha (Z-axis): {gyroscopeData.alpha.toFixed(2)}</p>
    //     <p>Beta (X-axis): {gyroscopeData.beta.toFixed(2)}</p>
    //     <p>Gamma (Y-axis): {gyroscopeData.gamma.toFixed(2)}</p>
    //   </div>
    // </div>
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Gyroscope Data Viewer version ( 0.0.1 ) with nomarl JS function</h1>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p>Alpha (Z-axis): {gyroscopeData.alpha.toFixed(2)}</p>
        <p>Beta (X-axis): {gyroscopeData.beta.toFixed(2)}</p>
        <p>Gamma (Y-axis): {gyroscopeData.gamma.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default GyroscopeDataViewer
