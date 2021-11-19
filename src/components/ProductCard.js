import { Component } from "react";
import App from "...App";
import productData from "../data/productData";

class ProductCard extends Component {

    render(){
        return(
            <div className="products">
                {productData.map(products) => ( 
                <h3>{products.name}</h3> 
                <div>Price: ${products.price.toFixed(2)</div>
                <br />
                <button onClick={() => this.props.productAddtoCart} >
                Add to Cart
                </button>
                <br />
                <img src={img} alt="Product Image" />
                <div>{products.description}</div>
            </div>
    
        </div>

        export default ProductCard;