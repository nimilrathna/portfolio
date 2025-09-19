// ExperienceCard.jsx
import React from "react";
import TechLead from "../../assets/tech_lead.png";

const ExperienceCard = ({ career }) => {
  return (
    <div className="bg-[#0f172a] rounded-xl shadow-lg mx-auto border border-gray-700">
    <div className="flex items-center justify-between p-4   relative">
        <p className="text-gray-400 text-sm">{career.period}</p>
        <h3 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold ">
        {career.role} · {career.company}
       
        </h3>
    </div>
    <div className="overflow-hidden border-t-[2px] border-gray-700 px-4 "></div>
    <div className="flex items-center p-4 justify-between  relative">
    <img
                src= {career.icon}
                width={150}
                height={150}
                className="rounded-lg transition-all duration-1000  hover:grayscale-0 hover:scale-110 cursor-pointer"
              />
    <div className="p-8 min-h-[200px] ">
      {/* Description */}
      <p className="text-gray-300 text-justify text-sm leading-relaxed mb-4">
        {career.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {career.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-cyan-950/40 text-cyan-300 text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      
      </div>
      </div>
    </div>
  );
};

export default ExperienceCard;