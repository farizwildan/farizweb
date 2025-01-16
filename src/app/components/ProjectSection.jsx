"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SIKPB",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farizwildan/finalta",
    previewUrl: "https://yasawaskitha.site/perpustakaan",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    title: "Papikos",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farizwildan/TA_PSBD_Sistem_Kost",
    previewUrl: "",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    title: "Anime",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/farizwildan/TA_DKP_Fariz-Wildan-Meiawan_21120120130074_Mangasan.git",
    previewUrl: "",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 4,
    title: "Calculator Caesar Chiper",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl:
      "https://github.com/farizwildan/caesar_cipher_encrypt_calculator.git",
    previewUrl: "",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 5,
    title: "Miracle",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://kelompok40-miracle.web.app/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 6,
    title: "Peminjaman Ruangan Teknik Komputer",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RajaTobias/Peminjaman_Ruangan_TEKKOM",
    previewUrl:
      "https://www.figma.com/design/Z43HUo3FdUPmucETsKquu3/Wireframe-peminjaman-ruangan?node-id=0-1",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const ProjectSection = ({ id }) => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4" id={id}>
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
