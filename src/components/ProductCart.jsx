/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ Product , idx }) => {
  // eslint-disable-next-line react/prop-types

  
  const { material, view, Guarantee, price, color, tipes, coating, sizes  , key } =
    Product;

console.log(idx);
 
  return (
    <div className="Goods_item ">
      <img className="ProductImgW" src={color[idx == undefined || idx == -1 ?Math.floor(Math.random() * color.length) : idx].src} />
      <h1>
        {material} {tipes} ({coating}-<span>{color[idx == undefined || idx == -1  ?Math.floor(Math.random() * color.length) : idx].name}</span>-{sizes})
      </h1>
      <p>
        Материал: <span>{material}</span>
      </p>
      <p>
        Вид: <span>{view}</span>
      </p>
      <p>
        Гарантия: <span>{Guarantee} лет</span>
      </p>
      <p>
        Цена:
        <span className="BoldPrice ml-1">
          {price === 0 ? "Цена по запросу" :price.toLocaleString("ru-RU")} сум/м<sup>2</sup>
        </span>
      </p>
      <div className="Optins">
        <Link to={"/product/" + key}>
          <button className="flex py-[10px] w-fit text-[11px] font-bold button px-[30px]">
            ПОДРОБНЕЕ
          </button>
        </Link>
        <img src="./phone.svg" />
      </div>
    </div>
  );
};

export default ProductCart;
