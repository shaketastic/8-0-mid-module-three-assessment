import { Component } from "react";

class ProductCard extends Component {
    constructor(){
        super();
    }
    render(){
        const { name, img, description, price } = this.props.products;
        const { productNameArr } = this.props.products;
        return(
            <div className="products-item-container">
                { productNameArr }
                <h3>{name}</h3> 
                <div>Price: {price}</div>
                <div>
                <button>Add to Cart</button>
                </div>
    
                <img src={img} alt="Product Image" />
            <div>
                  
            </div>    
            
            <div>{description}</div>
         </div>   
    );
  }
}

export default ProductCard;