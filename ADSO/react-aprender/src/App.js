import logo from './logo.svg';
import './App.css';
import { Test1 } from './components/test1';
import Saludo from './components/saludo';


function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Test1 /> */}
        <Saludo nombre="Juan"/>
    </div>
  );
}

export default App;
