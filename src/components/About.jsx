import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Section Content */}
        <p className="text-xl mt-10">
          I’m Pratyusha, a passionate front-end developer with a master’s degree
          in web development and hands-on experience in creating engaging,
          dynamic web applications. I specialize in building user-friendly,
          responsive interfaces using technologies like React, Tailwind CSS,
          Next.js, and GraphQL.
        </p>

        <br />

        <p className="text-xl">
          My approach focuses on delivering seamless user experiences with clean
          and efficient code. My love for coding stems from the joy of bringing
          creative ideas to life through technology. I enjoy solving complex
          challenges and collaborating with teams to deliver impactful digital
          solutions.
        </p>

        <br />

        <p className="text-xl">
          Committed to staying updated with the latest trends in web
          development, I aspire to contribute to innovative projects that push
          the boundaries of web technology.
        </p>
      </div>
    </div>
  );
};

export default About;
