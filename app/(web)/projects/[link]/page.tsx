"use client"

import { useParams } from "next/navigation";

import { FEATURED_WORKS } from "@/constants/data";
import ProjectDetailView from "@/modules/projects/ui/ProjectDetailView";


const ProjectPage = () => {
    const params = useParams();
    const link = Array.isArray(params.link) ? params.link[0] : params.link;

    const project = FEATURED_WORKS.find((b) => b.link === link);

    if (!project) return <div className="text-center mt-10">Project not found</div>;

    return (
        <ProjectDetailView project={project} />
    )
}

export default ProjectPage