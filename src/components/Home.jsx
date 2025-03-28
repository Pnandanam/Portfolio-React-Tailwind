import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-40"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a front-end developer with a master's in web development and
            hands-on experience in crafting dynamic and responsive web
            applications, I bring passion and enthusiasm to every project. I
            love to work on web applications using technologies like React,
            Tailwind, Next.js, and GraphQL.
          </p>

          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer shadow-md hover:shadow-lg"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Portrait of Pratyusha, a front-end developer"
            className="rounded-2xl mx-auto w-3/4 sm:w-1/2 md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
