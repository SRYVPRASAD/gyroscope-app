// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CameraDataViewer from './components/CameraDataViewer';
import Footer from './components/Footer';
import GyroscopeDataReceiver from './components/GyroDataRecevier';
import GyroscopeDataViewer from './components/Gyroscope';
import Header from './components/Header';
import { ObjectViewer } from './components/ObjectViewer';


function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<GyroscopeDataReceiver />} />
            <Route path="/viewer" element={<GyroscopeDataViewer />} />
            <Route path="/cameradata" element={<CameraDataViewer />} />
            <Route path="/objViewer" element={<ObjectViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
};

export default App;