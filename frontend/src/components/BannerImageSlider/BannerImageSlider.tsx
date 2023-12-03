"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import Image from "next/image";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./BannerImageSlider.scss";

const BannerImageSlider = () => {
    const bannerImages = [banner1, banner2];
    const swiperSlides = bannerImages.map((img, index) => (
        <SwiperSlide key={index}>
            <Image src={img} alt="" />
        </SwiperSlide>
    ));
    return (
        <Swiper
            id="bannerSlider"
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
        >
            {swiperSlides}
        </Swiper>
    );
};

export default BannerImageSlider;
