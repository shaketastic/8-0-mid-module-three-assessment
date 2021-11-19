import { Component } from "react";

class Checkout extends Component {
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: "",
        }
    }

    render(){
        return(
            <div id="checkout-container">
            <h2>Checkout</h2>
            <form id="checkout" onSubmit="Submit">
                <label htmlFor="first-name">First Name</label>
                <input
                    value={""}
                    type="text"
                    name="firstName"
                    id="first-name"
                    />

                <button type="submit">Buy Now</button>
             </form>
        </div>
        );
    }
}

export default Checkout;