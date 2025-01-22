import React, { useEffect, useState } from "react";

// Plain JavaScript to capture gyroscope data and send it to React
(function () {
  const sendGyroData = (data) => {
    // Dispatch a custom event with gyroscope data
    window.dispatchEvent(new CustomEvent("gyroscopeData", { detail: data }));
  };

  const handleOrientation = (event) => {
    const data = {
      alpha: event.alpha || 0,
      beta: event.beta || 0,
      gamma: event.gamma || 0,
    };
    sendGyroData(data);
  };

  // Request permission for iOS devices
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation, true);
        }
      })
      .catch(console.error);
  } else {
    // Add listener for other browsers
    window.addEventListener("deviceorientation", handleOrientation, true);
  }
})();


const GyroscopeDataViewer = () => {
  const [gyroscopeData, setGyroscopeData] = useState({ alpha: 0, beta: 0, gamma: 0 });
  // const [allowGyro, setAllowGyro] = useState(false);

  useEffect(() => {
    const handleGyroData = (event) => {
      setGyroscopeData(event.detail);
    };

    // Listen for the custom event
    window.addEventListener("gyroscopeData", handleGyroData);

    return () => {
      // Cleanup the listener
      window.removeEventListener("gyroscopeData", handleGyroData);
    };
  }, []);

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
      <h1>Gyroscope Data Viewer</h1>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p>Alpha (Z-axis): {gyroscopeData.alpha.toFixed(2)}</p>
        <p>Beta (X-axis): {gyroscopeData.beta.toFixed(2)}</p>
        <p>Gamma (Y-axis): {gyroscopeData.gamma.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default GyroscopeDataViewer
