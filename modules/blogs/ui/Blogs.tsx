"use client";

import { motion } from "framer-motion";

import BlogCard from "./BlogCard"

import { BLOGS_DATA } from "@/constants/data"
import { rowVariants } from "@/constants/animations";


const Blogs = () => {
    const rows = [];
    for (let i = 0; i < BLOGS_DATA.length; i += 2) {
        rows.push(BLOGS_DATA.slice(i, i + 2));
    }

    return (
        <section className="w-[90%] mx-auto pb-20">
            <div className="space-y-10">
                {rows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        variants={rowVariants}          // animation variants
                        initial="hidden"                // start hidden
                        whileInView="visible"           // animate when in viewport
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {row.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Blogs