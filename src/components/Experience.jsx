import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiGraphql } from "react-icons/si";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 size={50} className="text-orange-500" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJsSquare size={50} className="text-yellow-500" />,
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact size={50} className="text-blue-400" />,
    },
    {
      id: 5,
      name: "GitHub",
      icon: <FaGithub size={50} className="text-gray-400" />,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-teal-400" />,
    },
    {
      id: 7,
      name: "GraphQL",
      icon: <SiGraphql size={50} className="text-pink-500" />,
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, name, icon }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 hover:scale-105 duration-500 py-4 rounded-lg"
            >
              {icon}
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
