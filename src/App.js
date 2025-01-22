import './App.css';
import GyroscopeDataViewer from './components/Gyroscope';
import logo from './logo.svg';

function App() {
  return (
    <>
      <div className="App">
        <GyroscopeDataViewer />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Open this website on your mobile device and give access and shake it to view the data.</p>
        </header>
      </div>
    </>
  );
}

export default App;
