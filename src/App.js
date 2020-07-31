import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import receipts from './Data';
import Receipt from './Components/Receipt';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: receipts
    }
  }
  setPaid = index => {
    const newReceipts = this.state.receipts;
    receipts[index].paid = !receipts[index].paid;
    this.setState({ receipts: receipts});
  }
  render() {
    return (
      <div className="receipt-container">
        {this.state.receipts.map( (receipt, index) => {
          return ( 
            receipt.paid ? '' : <Receipt receipt = {receipt} index={index} setPaid={this.setPaid} />
          )
        })}
      </div>
    )
  }
}

export default App;