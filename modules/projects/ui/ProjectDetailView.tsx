"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Images from "./Images";

import { FeaturedWorkCardProps } from "@/modules/home/ui/FeaturedCard";
import { containerVariants, textVariants } from "@/constants/animations";


interface ProjectDetailProps {
    project: FeaturedWorkCardProps;
}

const ProjectDetailView = ({ project }: ProjectDetailProps) => {
    return (
        <div className="w-full bg-gray-100 pt-[10vh]">
            {/* HERO */}
            <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Bottom → Top Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <motion.div
                    className="absolute bottom-16 left-[5%] max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 variants={textVariants} className="text-white text-5xl md:text-7xl font-bold">
                        {project.title}
                    </motion.h1>
                    <motion.p variants={textVariants} className="text-white/80 mt-4 text-lg">
                        {project.description}
                    </motion.p>
                </motion.div>
            </section>


            {/* CONTENT */}
            <section className="w-[90%] md:w-[70%] mx-auto py-20 md:py-30 space-y-20 md:space-y-32">
                {/* Description Block */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h2 variants={textVariants} className="text-2xl md:text-3xl font-semibold mb-6">
                        Project Overview
                    </motion.h2>
                    <motion.p variants={textVariants} className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam in impedit vitae molestias iste esse porro aliquam saepe perspiciatis quasi, obcaecati eum reiciendis, corrupti eius accusantium voluptate consequatur iusto tempore quia qui, beatae error? Molestiae adipisci illum voluptate, accusantium ipsum vel autem. Expedita velit vitae, asperiores sequi ipsa earum! Provident excepturi minus reprehenderit accusamus nesciunt ad praesentium rem, alias, cupiditate velit sequi natus vitae maiores! Nulla ea in tempore.
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas et animi maxime soluta. Distinctio quibusdam, quas molestiae maiores aliquid dolore eaque doloribus obcaecati ex, delectus deserunt eum. Mollitia itaque quaerat fugit laborum quae repudiandae unde iste quod inventore iure et eaque laudantium ducimus vero, modi rem odit optio incidunt rerum tenetur eum magnam consequatur exercitationem voluptatibus. Fugit, et ullam?
                    </motion.p>
                </motion.div>

                {/* Large Visual Section */}
                <Images />

                {/* CTA */}
                <div className="flex justify-between items-center border-t pt-10">
                    <Link
                        href="/projects"
                        className="text-sm uppercase tracking-widest hover:opacity-60 transition"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailView;
