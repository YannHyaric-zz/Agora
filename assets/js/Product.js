import React from "react";
import Rating from "./Rating";

export default function Product() {
  const { product } = props;
  return (
    <div key={product.id} class="featured_product">
      <div class="featured_box">
        <a href={`/product/${product._id}`}>
          <img
            src="/assets/img/p1.jpg"
            alt={product.nome}
            class="featured_img"
          />
        </a>
      </div>
      <div class="featured_data">
        <h3 class="featured_name">{product.nome}</h3>
        <span class="featured_price">
          {product.temPromo ? product.promo : product.preco}
        </span>
      </div>
      <Rating rating={product.estrelas}></Rating>
    </div>
  );
}
