// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "./styles.css";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

SwiperCore.use([Pagination]);

const ProductPage = () => {
  let { ProductId } = useParams();
  const goods = useSelector((state) => state.goods.data);
  const [Prodict, setProdict] = useState([]);
  const [ProductItem, setProductItem] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [RAl, setRAl] = useState("");
  const [Coating, setCoating] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const {
    material,
    tipes,
    coating,
    color,
    sizes,
    view,
    price,
    Guarantee,
    name
    
  } = ProductItem;
  useEffect(() => {
    if (goods.length > 0) {
      setProdict([...goods.filter((i) => i.key == ProductId)]);
      setProductItem([...goods.filter((i) => i.key == ProductId)][0]);

      let arr = goods.filter(
        (i) => i.material === material && i.tipes === tipes
      );
      let Uniq = [];
      for (let coat of arr) {
        Uniq.push(coat["coating"]);
      }
      Uniq = [...new Set(Uniq)];
      let newFillCoat = [];
      for (let item of Uniq) {
        let it = arr.filter((i) => i.coating === item)[0];

        newFillCoat.push(it);
      }
      setCoating([...newFillCoat]);
      let filSizes = goods.filter(
        (item) =>
          item.coating === coating &&
          item.material === material &&
          item.view === view &&
          item.tipes === tipes &&
          item.name === name
      );
      setSizes([...filSizes]);
    }
  }, [
    ProductId,
    coating,
    goods,
    material,
    name,
    tipes,
    view,
    ProductItem,
    RAl,
  ]);

  //   console.log(color);
  const pagination = {
    el: ".CreateColors",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} " style = "background-color: ${color[index]?.color} ;  display: block !important ;   box-shadow: 0px 1px 5px black; " name="${color[index].name}"  > <p class="ralColor">${color[index].RGBA}</p> </div> `;
    },
  };
  function handleSlideChange(swiper) {
    let activeSlideObj = color[swiper.activeIndex];
    setRAl(activeSlideObj.RGBA);
  }
  const handleItemClick = (swiper) => {
    swiper.activeIndex = 0
    let activeSlideObj = color[0];
    setRAl(activeSlideObj.RGBA);
  };
  return (
    <div className=" bg-[#F2F2F2] pt-[100px] px-[5%]">
      {Prodict.length > 0 ? (
        <>
          <h1 className="lg:text-2xl text-4xl font-bold ">{material}</h1>
          <p>
            <Link to={"/catalog"}>Каталог</Link> /{" "}
            <Link to={"/catalog"}>Каталог</Link>
          </p>
          <h1 className="text-4xl font-bold mt-5 lg:text-2xl">
            {material} {tipes} ({coating}-<span>{color.length === 1 ? color[0].RGBA : RAl}</span>-{sizes})
          </h1>
          <div className="flex gap-8 mt-5 relative lg:flex-col pb-10">
            <div className="w-1/2 lg:w-full h-fit sticky lg:static top-[100px]  left-0">
              <div className="">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                  modules={[FreeMode, Navigation, Thumbs]}
                  pagination={pagination}
                  className="mySwiper2 exl:max-h-[500px]"
                  onSlideChange={handleSlideChange}
                  onSwiper={handleItemClick}
                >
                  {color.map((item, idx) => (
                    <SwiperSlide key={idx} className="h-full">
                      <img src={item.src} className=" object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  // loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper max-h-[500px] "
                >
                  {color.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={item.src} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex  gap-[21px]">
                <img src="/alert-triangle.svg" alt="" />
                <p className=" text-sm text-[#6A6A6A] font-bold">
                  Цвета на экране монитора, а также детали внешнего вида
                  кровельного материала могут мотличаться от реальных. Наличие
                  конкретных цветов и профилей запрашивайте у дилеров.
                </p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full">
              <h1 className=" text-3xl font-bold">Характеристики:</h1>
              <div className=" text-xl font-bold mt-5">
                <p>
                  Цвет: <span className="font-medium">{RAl}</span>
                </p>
                <div className="CreateColors"></div>
                <div className=" border-t border-black border-solid mt-5"></div>
              </div>
              <div className=" text-xl font-bold mt-5">
                <p>
                  Покрытие: <span className="font-medium">{coating}</span>
                </p>
                <div className="coatingCont">
                  {Coating.map((item, idx) => (
                    <Link
                      to={"/product/" + item.key}
                      key={item.coating + idx + item.idx}
                      onClick={()=> {handleItemClick()}}
                    >
                      <span
                        className={
                          item.coating === coating
                            ? "details_size details_sizeActive"
                            : "details_size"
                        }
                      >
                        {item.coating}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className=" border-t border-black border-solid mt-5"></div>
              </div>
              <div className=" text-xl font-bold mt-5">
                <p>
                  Категория товаров: <span className="font-medium">{view}</span>
                </p>
                <div className=" border-t border-black border-solid mt-5"></div>
              </div>
              <div className=" text-xl font-bold mt-5">
                <p>
                  Цена:{" "}
                  <span className="font-medium">
                    {price === 0
                      ? "Цена по запросу"
                      :
                      <>
                      { price.toLocaleString("ru-RU")} сум/м<sup>2</sup>
                      </>
}
                  </span>
                </p>
                <div className=" border-t border-black border-solid mt-5"></div>
              </div>
              <div className=" text-xl font-bold mt-5">
                <p>
                  Гарантия: <span className="font-medium">{Guarantee} лет</span>
                </p>
                <div className=" border-t border-black border-solid mt-5"></div>
              </div>
              <div className=" text-xl font-bold mt-5">
                <p>
                  Толщина : <span className="font-medium">ПЭ</span>
                </p>
                <div className="coatingCont">
                  {Sizes.map((item, idx) => (
                    <Link
                      to={"/product/" + item.key}
                      key={item.sizes + idx + item.idx}
                    >
                      <span
                        className={
                          item.sizes === sizes
                            ? "details_size details_sizeActive"
                            : "details_size"
                        }
                      >
                        {item.sizes}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className=" border-t border-black border-solid mt-5"></div>
              </div>
              <button className="consultation">
              <img src="/icons/phone.svg" alt="" />
              <p>КОНСУЛЬТАЦИЯ</p>
            </button>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ProductPage;
