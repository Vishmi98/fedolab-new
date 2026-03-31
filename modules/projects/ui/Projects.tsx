"use client";

import { motion } from "framer-motion";

import { FEATURED_WORKS } from "@/constants/data";
import FeaturedWorkCard from "@/modules/home/ui/FeaturedCard";
import { rowVariants } from "@/constants/animations";


const Projects = () => {
    const rows = [];
    for (let i = 0; i < FEATURED_WORKS.length; i += 2) {
        rows.push(FEATURED_WORKS.slice(i, i + 2));
    }

    return (
        <section className="w-[90%] mx-auto pb-20">
            <div className="space-y-10">
                {rows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        variants={rowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {row.map((work) => (
                            <FeaturedWorkCard
                                key={work.id}
                                title={work.title}
                                description={work.description}
                                image={work.image}
                                link={work.link}
                            />
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
