import React from 'react';
import Slide from 'react-reveal/Slide';
import './App.css';
import Calculator from './components/Calculator';

function App() {

    return (
      <div>
        <div className="title">
          <Slide duration={1000} top cascade>
            Simple Calculator
          </Slide>
          <Calculator></Calculator>
          {/* <button className="dark-mode" onClick={() => this.toggleDarkMode()}><img className="moon" src={require("./moon.png")} alt="moon"></img></button> */}
        </div>

      </div>
    );

}

export default App;
