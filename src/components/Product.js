import React from 'react';
import {Link} from 'react-router-dom';

// const Product = ({match,data}) => {
const Product = (props) => {  
   // console.log(props);
    var product= props.data.find(p => p.id == props.match.params.productId);
    var productInfos;
  
    if(product)
    productInfos =<div>
                      <p>Description : {product.description}</p>
                      <p>Prix: {product.price}</p>
                  </div>;
    else
    productInfos = <h2> Désolé. Produit n'existe pas </h2>;
  
    return (
        <div className="container-product">
            <div className="product">
           {productInfos}
        </div>
        {/* Retour à la page Products */}
        <Link className="backward" to="/products">Tous Les produits</Link>
        </div>
        
    )    
  }
  export default Product
