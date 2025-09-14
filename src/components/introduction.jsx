// @flow strict

import { personalData } from "../data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import profileImg from "../data/profile2.png";

function Introduction() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
          <img
            src= {profileImg}
            width={480}
            height={480}
            alt="Nimil Rathna"
            className="rounded-lg transition-all duration-1000  hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
      
        <div className="order-2 lg:order-1 flex flex-col items-start  p-2 pb-20 md:pb-10 lg:pt-10">
          <br/>
          <h1 className=" text-left text-3xl leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
           {personalData.name}
           <br/>
            {personalData.designation}
          </h1>

          <div className="my-12 flex items-center gap-9">
            <a
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </a>
            <a
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </a>
          </div>
         <p className=" text-left text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
          

        </div>
        
      </div>
      
    </section>
  );
};

export default Introduction;