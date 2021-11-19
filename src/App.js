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
      prodDescription: "",
      productAddtoCart: []
    }


  handleProductSelect = () => {
    const 
    this.setstate({
      productAddtoCart: productData
    })
  }

  handleAddtoCart = (event) => {
    this.setState({
      productsInCart: [...this.state.productAddtoCart, products]
    });
  }
  render(){

      // return <ProductCard key={ products } products={ products } handleAddtoCart={this.handleAddtoCart} />;
        return (
          <div>
            <h2>{productData.name}</h2>
          </div>
        );
    }
  }

    return(
      <div className="products" id="products">
        <div id="products-list-container">
        <h1>My Garage Sale</h1>
          <ProductCard />
        <div> 
          <h3>{this.state.products}</h3>
          </div>
        <div className="cart-container" id="cart-container">
            <Cart cart={cart} handleRemoveCart={this.handleRemoveCart} />
          </div>  
         
    </div>
      );
    }


export default App;
