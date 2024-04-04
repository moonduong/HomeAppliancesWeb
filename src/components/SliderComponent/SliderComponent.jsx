import React from "react";
import Slider from "react-slick";
import { Image } from "antd"; 


const SlideComponent=({arrImages})=>{
    const settings={
        dots:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return(
        <Slider {...settings}>
            {arrImages.map((image)=>{
                return(
                    <Image src={image} alt="slider" preview={false} width="100%" height="274px"/>
                )
            })}

        </Slider>
    )
}

export default SlideComponent;