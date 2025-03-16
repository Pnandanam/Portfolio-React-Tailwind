import React from "react";
import weatherImage from "../assets/Weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherImage,
      title: "Weather App",
      demo: "https://merry-jalebi-09cf18.netlify.app/",
      code: "https://github.com/Pnandanam/weather-app",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300",
      title: "Project 2",
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300",
      title: "Project 3",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work below:</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.map(({ id, src, title, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 object-cover w-full h-40"
              />
              <div className="text-center mt-2">
                <p className="text-lg font-semibold">{title}</p>
              </div>
              <div className="flex items-center justify-center space-x-4 p-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
