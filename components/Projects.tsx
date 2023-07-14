import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Sunkist from "../public/Sunkist.png";
import Netflix from "../public/Netflix.png";
import Youtube from "../public/Youtube.png";

const Projects = () => {
  const projects = [
    {
      name: "Sunkist Dental",
      description:
        "Dental Website for Sunkist Dental, a dental office located in Orange, CA. Built using React.js, Tailwind CSS, and Firebase.",
      image: Sunkist,
      github: "https://github.com/rushilshah11",
      link: "https://sunkist-dental.web.app/",
    },
    {
      name: "Netflix Case Competition",
      description:
        "Ideated  3 solutions backed by qualitative and quantitative data to increase Netflix's market share in the streaming industry.",
      image: Netflix,
      github: "https://github.com/rushilshah11",
      link: "https://platoio.com/register",
    },
    {
      name: "Youtube Brand Analysis Dashboard",
      description:
        "Built a Brand Analysis Dashboard to draw insights on competitor brands using ReactJS and Youtube's Data API.",
      image: Youtube,
      github: "https://github.com/rushilshah11/YT-Analysis-Dashboard",
      link: "https://yt-analysis-dashboard.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="mb-5">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="Hello"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        priority={true}
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
