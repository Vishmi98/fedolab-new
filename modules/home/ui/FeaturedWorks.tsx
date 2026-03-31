/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiPause } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

import FeaturedWorkCard from "./FeaturedCard";

import { FEATURED_WORKS } from "@/constants/data";
import { cardVariants, characterVariants, waveContainer } from "@/constants/animations";


const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1280 }, items: 3 },
    tablet: { breakpoint: { max: 1280, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const FeaturedWorks = () => {
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<any>(null); // Added ref to control carousel

    const h1Text = "Featured Works";
    const h1Characters = Array.from(h1Text);

    // Helper to handle dot clicks
    const handleDotClick = (index: number) => {
        if (carouselRef.current) {
            carouselRef.current.goToSlide(index);
        }
    };

    return (
        <>
            <motion.section
                className="w-[90%] mx-auto pt-20"
                variants={waveContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Header */}
                <motion.h1 className="text-4xl md:text-6xl font-semibold mb-10">
                    {h1Characters.map((char, index) => (
                        <motion.span
                            key={index}
                            className="inline-block"
                            variants={characterVariants}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>
            </motion.section>
            <div className="w-[90%] mx-auto">
                {/* Carousel */}
                <Carousel
                    ref={carouselRef} // Attached ref
                    responsive={responsive}
                    autoPlay={isAutoPlay}
                    autoPlaySpeed={4000}
                    infinite
                    arrows={false}
                    showDots={false}
                    pauseOnHover={false}
                    draggable
                    swipeable
                    containerClass="pb-8"
                    itemClass="md:px-5"
                    // Correctly calculate the index using modulo
                    beforeChange={(nextSlide) => {
                        const realIndex = nextSlide % FEATURED_WORKS.length;
                        setCurrentSlide(realIndex);
                    }}
                >
                    {FEATURED_WORKS.map((work, index) => (
                        <motion.div
                            key={work.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <FeaturedWorkCard
                                title={work.title}
                                description={work.description}
                                image={work.image}
                                link={work.link}
                            />
                        </motion.div>
                    ))}
                </Carousel>
            </div>

            {/* Custom Dots + Play/Pause */}
            <div className="flex items-center justify-center gap-4 mt-5 mb-10">
                <div className="bg-gray-300 flex items-center pl-4 pr-2 py-1 rounded-full">
                    {/* Dots */}
                    <div className="flex gap-2">
                        {FEATURED_WORKS.map((_, index) => {
                            // Check if the current slide (modulo length) matches the dot index
                            const isActive = currentSlide === index;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${isActive ? "bg-gray-800 w-8" : "bg-gray-400 w-3"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            );
                        })}
                    </div>

                    {/* Play / Pause */}
                    <button
                        onClick={() => setIsAutoPlay((prev) => !prev)}
                        className="ml-6 flex items-center justify-center rounded-full bg-gray-100 w-10 h-10 transition-all hover:bg-gray-200"
                        aria-label={isAutoPlay ? "Pause carousel" : "Play carousel"}
                    >
                        {isAutoPlay ? <BiPause size={25} /> : <FaPlay size={15} />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default FeaturedWorks;