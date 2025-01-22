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
          <p> Open this website on your mobile device and give it a shake to view the data.</p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

      </div></>
  );
}

export default App;
