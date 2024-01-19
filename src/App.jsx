import React from "react";
import LabelledInput from "./LabelledInput";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      mass: 0.00,
      height: 0.00
    };

    // binding "this" into the handler methods
    this.handleHeightChange = this.handleHeightChange.bind( this );
    this.handleMassChange = this.handleMassChange.bind( this );
  }

  // the handleMassChange() method
  // this method is used to report change in the mass input value as state changes
  handleMassChange( event ) {
    this.setState(
      {
        mass: event.target.value
      }
    );
  }
  
  // the handleHeightChange() method
  // this method is used to report change in the height input value as state changes
  handleHeightChange( event ) {
    this.setState(
      {
        height: event.target.value
      }
    );
  }

  render() {
    var BMI = ( this.state.mass == 0 || this.state.height == 0 ) 
          ? 0 
          : ( this.state.mass / ( ( this.state.height / 100 ) ** 2 ) ).toFixed(2);

    return (
      <div className="app">

        {/* the input pane/form */}
        <div className="input-pane">

          <LabelledInput 
            onChange={this.handleMassChange} 
            labelText="Weight(kg):" 
            placeholder="Enter your mass in Kg"
            inputID = "mass-input"
          />
          
          <LabelledInput 
            onChange={this.handleHeightChange} 
            labelText="Height(m2):" 
            placeholder="Enter your height in cm"
            inputID = "height-input"
          />

        </div>

        {/* the result pane */}
        <div className="result-pane">
          <h2>{"BMI( Body Mass Index )"}</h2>

          <span className="result">
                  { 
                    BMI
                  }
          </span>

          <h3>
            {
              ( BMI < 18.5 )
              ? 
                "underweight"
              :
                ( BMI >= 15.0 && BMI <= 24.9 ) 
                ?
                  "normal"
                :
                  ( BMI >= 25.0 && BMI <= 29.9 )
                  ?
                    "overweight"
                  :
                    "obese"
            }
          </h3>
        </div>
      </div>
    )
  }
}

export default App;
