import React from 'react';

class DisplayContainer extends React.Component {
 constructor(props) {
  super(props);
}
// Updates the number property in state when input value changes.


 render() {
 // Renders a form to get user input and passes the value of state to props table container.

  return(
  <div className="display">
    <ul>
      <li><p className="price">$0.65<button className="coke" onClick={this.props.setSelection("coke")} >COKE</button></p></li>
      <li><p className="price">$1.00<button className="pepsi" onClick={this.props.setSelection("pepsi")}>PEPSI</button></p></li>
      <li><p className="price">$1.50<button className="soda" onClick={this.props.setSelection("soda")}>SODA</button></p></li>
      <li><p className="price">$2.00<button className="water" onClick={this.props.setSelection("water")}>WATER</button></p></li>
    </ul>
 </div>
   );
  }
 }

export default DisplayContainer;
