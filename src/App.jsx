import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.scss';
import logo from './img/logo.png';

function App() {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);

  const handleClose = () => setVisible(false);

  return (
    <div className="App">
      <button className="nav-btn open-btn" onClick={handleOpen}>
        <FaBars />
      </button>
      <img src={logo} alt="Logo" className="logo" />
      <div className={`nav nav-black${visible ? ' visible' : ''}`}>
        <div className={`nav nav-red${visible ? ' visible' : ''}`}>
          <div className={`nav nav-white${visible ? ' visible' : ''}`}>
            <button className="nav-btn close-btn" onClick={handleClose}>
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
