import React from 'react';
import CoinsComponent from '../Components/CoinsComponent.js'
import BalanceDisplayComponent from '../Components/BalanceDisplayComponent.js'
import ButtonsComponent from '../Components/ButtonsComponent.js'

class InputContainer extends React.Component {
  render() {
    return(
      <div className="controller">
        <BalanceDisplayComponent balance={this.props.balance} />
        <CoinsComponent updateBalance={this.props.updateBalance}/>
        <ButtonsComponent props={this.props}/>
      </div>
    );
  }
}


export default InputContainer;