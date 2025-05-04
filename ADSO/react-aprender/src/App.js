import logo from './logo.svg';
import './App.css';
import { Test1 } from './components/test1';



function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Test1 />
    </div>
  );
}

export default App;
