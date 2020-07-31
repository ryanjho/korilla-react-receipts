import React, { Component } from 'react';

class Receipt extends Component {
    constructor(props) {
        super(props);
    }
    handlePay = (index) => {
        this.props.setPaid(this.props.index);
    }
    render() {
        const { person, order } = this.props.receipt;
        return (
            <div className="receipt">
                <h1 className="person-name">{person}</h1>
                <p>Main: {order.main}</p>
                <p>Protein: {order.protein}</p>
                <p>Rice: {order.rice}</p>
                <p>Sauce: {order.sauce}</p>
                <p>Drink {order.drink}</p>
                <p>Cost {order.cost}</p>
                <button onClick={this.handlePay}>Pay For This</button>
            </div>

        )
    }
}

export default Receipt;