import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CameraDataViewer from './components/CameraDataViewer';
import GyroscopeDataReceiver from './components/GyroDataRecevier';
import GyroscopeDataViewer from './components/Gyroscope';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<GyroscopeDataReceiver />} />
        <Route path="/viewer" element={<GyroscopeDataViewer />} />
        <Route path="/cameradata" element={<CameraDataViewer />} />
      </Routes>
    </Router>

  );
}

export default App;
