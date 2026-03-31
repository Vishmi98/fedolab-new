"use client"

import Image from "next/image";
import { useParams } from "next/navigation";

import { BLOGS_DATA } from "@/constants/data";


const BlogPage = () => {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const blog = BLOGS_DATA.find((b) => b.slug === slug);

    if (!blog) return <div className="text-center mt-10">Blog not found</div>;

    return (
        <div className="overflow-hidden bg-gray-100">
            <section className="w-[90%] md:w-[70%] mx-auto py-20 md:py-30">

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold">
                    {blog.title}
                </h1>

                {/* Meta */}
                <p className="mt-3 text-gray-500 border-b border-gray-300 pb-3">
                    {blog.date} • {blog.author}
                </p>

                {/* Image */}
                <div className="relative w-full h-[300px] md:h-[500px] my-10 overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-5">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum praesentium voluptates reprehenderit commodi natus recusandae libero magni facere ullam dolor alias dicta, totam soluta aliquam tempore vel modi quia asperiores nisi dignissimos tempora nobis. Amet suscipit soluta vero omnis veritatis. Nihil obcaecati minima fuga dolor officiis assumenda enim, ea est!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quae illum sint incidunt nulla quo, sed quisquam aperiam voluptates in asperiores ipsum laboriosam exercitationem molestiae tenetur voluptatem expedita quaerat numquam pariatur vel a dolor ullam aliquam distinctio? Hic laudantium voluptatibus itaque quae eaque exercitationem fugit obcaecati ex est minima aperiam nobis adipisci rerum cumque, animi ipsum esse officiis inventore ad.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, saepe accusamus possimus eius harum perspiciatis architecto repudiandae facilis sint neque, exercitationem numquam eligendi molestias ratione earum illo nam adipisci nesciunt quae cumque quam officiis nihil molestiae? Nam beatae ad a veniam quam autem alias quo repudiandae accusantium, eligendi consequuntur corporis laudantium doloremque porro placeat molestias, cupiditate illum natus veritatis qui incidunt est ipsum! Unde minima, eligendi quia magnam neque provident vitae eos ducimus obcaecati id facere impedit debitis voluptate at exercitationem, natus veritatis ratione reiciendis labore porro, rerum adipisci molestiae? Incidunt aliquam cum odit ipsam, aspernatur dignissimos quas repudiandae saepe.</p>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
