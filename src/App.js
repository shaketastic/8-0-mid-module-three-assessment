import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

import data from "./data/productData";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import productData from "./data/productData";


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: productData,
      productAddtoCart: {
        id: "",
        name: "",
        description: "",
        img: ""
      },
    }


  handleProductSelect = (event) => {
    this.setstate({
      productAddtoCart: productData
    })
  }

  handleAddtoCart = (event) => {
    event.preventDefault();
    this.setState({
      productsInCart: [...this.state.productAddtoCart, products]
    });
  }

  // handleProductTotal = () => {
  // }

  render(){
    let productNameArr = this.state.products.map((products) =>{
      return(
        
        <ProductCard key={ products.id } products={ products } handleAddtoCart={this.handleAddtoCart} />
      )
    });

    return(
    <div className="products" id="products">
      <div id="products-list-container">
        <h1>My Garage Sale</h1>
          <ProductCard />
        <div> 
          <h3>{this.state.products}</h3>
          </div>
        </div>
        <div className="cart-container" id="cart-container">
            <Cart />
          </div>  
         
    </div>
      );
    }
  }
}

export default App;
