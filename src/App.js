import './App.css';
import GyroscopeDataViewer from './components/Gyroscope';
import logo from './logo.svg';

function App() {
  return (
    <>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            load this website in the modile and shake it to see the data.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div className="App">
          <GyroscopeDataViewer />
        </div>
      </div></>
  );
}

export default App;
