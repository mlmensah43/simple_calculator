import React from 'react';
import '../css/Calculator.css';

function Calculator() {
    return(
        <div className="calculator">

            <div className="equation-display">...</div>

            <div className="display">0</div>

            <div className="underline"><hr></hr></div>

            <div class="grid-container">

                <div class="grid-item">C</div>
                <div class="grid-item">+/-</div>
                <div class="grid-item">%</div>
                <div class="grid-item">/</div>

                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">×</div>

                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">-</div>

                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">+</div>

                <div class="grid-item">0</div>
                <div class="grid-item">.</div>
                <div class="grid-item"></div>
                <div class="grid-item equal-sign">=</div>

            </div>
        </div>
    );
}

export default Calculator;