import React from 'react';
import Slide from 'react-reveal/Slide';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {

  render(){
    return (
      <div>
        <div className="title">
          <Slide duration={1000} top cascade>
            Simple Calculator
          </Slide>
          <Calculator></Calculator>
        </div>
      </div>
    );
    }
}

export default App;
