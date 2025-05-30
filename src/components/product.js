import React from 'react';

function Product(props) {
  return (
    <div>
      <img src={props.img} alt="Product" className="imgSection" />
      <div className="productDetails">
        <p className="productTxt1">{props.productTxt1}</p>
        <p className="productTxt2">{props.productTxt2}</p>
        <p className="productTxt2">{props.productTxt3}</p>
        <p className="productDsc">{props.productDsc}</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
