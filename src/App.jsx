import { FaBars, FaTimes } from 'react-icons/fa';
import './App.scss';
import logo from './img/logo.png';

function App() {
  return (
    <div className="App">
      <button className="nav-btn open-btn">
        <FaBars />
      </button>
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav nav-black">
        <div className="nav nav-red">
          <div className="nav nav-white">
            <button className="nav-btn close-btn">
              <FaTimes />
            </button>
            <img src={logo} alt="Logo" className="logo" />
            <ul className="list">
              <li>
                <a href="#!">Teams</a>
              </li>
              <li>
                <a href="#!">Locations</a>
              </li>
              <li>
                <a href="#!">Life at Netflix</a>
              </li>
              <ul>
                <li>
                  <a href="#!">Netflix culture memo</a>
                </li>
                <li>
                  <a href="#!">Work life balance</a>
                </li>
                <li>
                  <a href="#!">Inclusion &amp; diversity</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <p className="text">Mobile Navigation</p>
    </div>
  );
}

export default App;
