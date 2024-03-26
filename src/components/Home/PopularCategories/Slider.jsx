import { useEffect, useRef } from "react";
import { foodItems } from "../../../utils/data";
import FoodCard from "../../cards/FoodCard";
import { register } from "swiper/element/bundle";
register();
const Slider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
   const swiperContainer = swiperRef.current;
   const params = {
     navigation: true,
     pagination:{
      clickable: true,
     },
     spaceBetween: 12,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1180:{
         slidesPerView: 4,
      }
    },
     injectStyles: [
      `
      
        .swiper-button-next,
        .swiper-button-prev {
          padding: 8px 16px;
          color: var(--primary-color);
          
        }
        .swiper-button-next{
         position: absolute;
         bottom: 0px;
        }
        .swiper-pagination-bullet{
          width: 20px;
          height: 20px;
          background: rgba(0, 0, 0, 0.5);
        }

        .swiper-pagination-bullet-active {
         color: #fff;
         background: var(--primary-color);
       }
    `,
    ],
   };

   Object.assign(swiperContainer, params);
   swiperContainer.initialize();
 }, []);

  return (
    <swiper-container ref={swiperRef} init="false"  speed="500" loop="true" css-mode="true" className='swiper-container-custom'>
      {foodItems.map((item) => (
        <swiper-slide key={item.id} className="">
          <FoodCard item={item} />
        </swiper-slide>
      ))}

     
    </swiper-container>
  );
};

export default Slider;
