import React from 'react';
import Slide from 'react-reveal/Slide';
import Calculator from './Calculator';
import '../css/App.css';

function App() {

    return (
        <div className="title">
          <Slide duration={1000} top cascade>
            Simple Calculator
          </Slide>
          <Calculator></Calculator>
        </div>
    );

}

export default App;
