"use client";

import { FEATURED_IMAGES } from "@/constants/data";
import Image from "next/image";
import { useState } from "react";
import { BiPause } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1280 }, items: 2 },
    tablet: { breakpoint: { max: 1280, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Images = () => {
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    return (
        <section className="w-full" >
            {/* Carousel Wrapper */}
            <div className="relative mt-14 md:mt-20" >
                <Carousel
                    responsive={responsive}
                    autoPlay={isAutoPlay}
                    autoPlaySpeed={4000}
                    infinite
                    arrows={false}
                    showDots
                    renderDotsOutside
                    pauseOnHover={false}
                    draggable
                    swipeable
                    containerClass="pb-16"
                    itemClass="md:px-4"
                >
                    {FEATURED_IMAGES.map((item) => (
                        <div
                            key={item.id}
                            className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
                            />

                            {/* Subtle Overlay (Lusion-style) */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </Carousel>

                {/* Play / Pause Button (Near Dots) */}
                <button
                    onClick={() => setIsAutoPlay((prev) => !prev)}
                    className="absolute bottom-[-5] right-1/2 translate-x-[120px]
                     flex items-center justify-center rounded-full
                     bg-gray-300 w-10 h-10 transition-all
                     hover:scale-105"
                    aria-label={isAutoPlay ? "Pause carousel" : "Play carousel"}
                >
                    {isAutoPlay ? <BiPause size={25} /> : <FaPlay size={15} />}
                </button>
            </ div>
        </section>
    )
}

export default Images