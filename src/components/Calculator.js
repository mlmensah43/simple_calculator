import React from 'react';
import '../css/Calculator.css';

class Calculator extends React.Component {
    
    state={
        value: null,
        display:'0',
        waitingForOperand: 0,
        operator: null,
        
    }
    
    inputDigit(digit){
        const { display, waitingForOperand } = this.state
        
        if(display.length < 10){
            if(waitingForOperand){
                this.setState({
                    display: String(digit),
                    waitingForOperand: 0
                })
            }
            else{
                if(digit.length === 9){
                }
                this.setState({ 
                    display: display === '0' ? String(digit) : display + digit
                })
            }
        }
        
        
    }


    inputDot(){
        const { display, waitingForOperand } = this.state
        const value = display.toString()

        if(waitingForOperand){
            this.setState({ 
                display: '0.',
                waitingForOperand: 0
            })
        }
        else{
            if(value.indexOf('.') === -1){
                this.setState({ 
                    display: display + '.',
                    waitingForOperand: 0
                })
            }
        }
        
    }
    
    clearDisplay(){
        this.setState({ 
            display: '0'
        })
        
    }

    toggleSign(){
        const { display } = this.state
        const value = display.toString()

        this.setState({ 
            display: value.charAt(0) === '-' ? value.substr(1) : '-' + value
        })
    }

    inputPercent(){
        const { display } = this.state
        const value = parseFloat(display)

        this.setState({ 
            display: value / 100
        })
    }

    inputDelete(){
        const { display } = this.state
        const value = display.toString()

        this.setState({
            display: display.length === 1 ? '0' : value.substr(0,value.length - 1)
        })

    }

    performOperation(currOperator){
        const { display, operator, value } = this.state

        const next = parseFloat(display)

        const operations = {
            '/': (prev, next) => prev / next,
            '*': (prev, next) => prev * next,
            '+': (prev, next) => prev + next,
            '-': (prev, next) => prev - next,
            '=': (prev, next) => next

        }

        if(value == null){
            //No previous value and operator key has been pressed
            this.setState({
                value: next
            })
        }

        else if(operator){
            const curr = value || 0
            const solution = operations[operator](curr,next)

            if(!Number.isInteger(solution)){
                this.setState({    
                    value: solution,
                    display: parseFloat(solution).toFixed(2),
                    
                })
            }
            
            else{
                this.setState({    
                    value: solution,
                    display: String(solution),
                    
                })
            }
            
        }

        this.setState({
            waitingForOperand: 1,
            operator: currOperator,
        })
    }



    render(){

        const { display } = this.state

        return(
            <div className="calculator">
    
                <div className="display">{display}</div>
    
                <div className="underline"><hr></hr></div>
    
                <div className="grid-container">
    
                    <button className="button-key" onClick={() => this.clearDisplay()}>C</button>
                    <button className="button-key" onClick={() => this.toggleSign(7)}>±</button>
                    <button className="button-key" onClick={() => this.inputPercent()}>%</button>
                    <button className="button-key" onClick={() => this.performOperation('/')}>÷</button>
    
                    <button className="button-key" onClick={() => this.inputDigit(7)}>7</button>
                    <button className="button-key" onClick={() => this.inputDigit(8)}>8</button>
                    <button className="button-key" onClick={() => this.inputDigit(9)}>9</button>
                    <button className="button-key" onClick={() => this.performOperation('*')}>×</button>
  
                    <button className="button-key" onClick={() => this.inputDigit(4)}>4</button>
                    <button className="button-key" onClick={() => this.inputDigit(5)}>5</button>
                    <button className="button-key" onClick={() => this.inputDigit(6)}>6</button>
                    <button className="button-key" onClick={() => this.performOperation('-')}>-</button>
   
                    <button className="button-key" onClick={() => this.inputDigit(1)}>1</button>
                    <button className="button-key" onClick={() => this.inputDigit(2)}>2</button>
                    <button className="button-key" onClick={() => this.inputDigit(3)}>3</button>
                    <button className="button-key" onClick={() => this.performOperation('+')}>+</button>
  
                    <button className="button-key" onClick={() => this.inputDigit(0)}>0</button>
                    <button className="button-key" onClick={() => this.inputDot()}>.</button>
                    <button className="button-key" onClick={() => this.inputDelete()}>␡</button>
                    <div className=" equal-sign"><button className="button-key" onClick={() => this.performOperation('=')}>=</button></div>
    
                </div>
                
                
            </div>
        );

    }
    
}

export default Calculator;