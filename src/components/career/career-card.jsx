// @flow strict

import * as React from 'react';
import SkillTags from './skill-tag';
function CareerCard({ career }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
        <p className="text-left ml-3 text-[#16f2b3] text-base lg:text-xl">
          {career.time}
        </p>
          <p className="text-left ml-3 text-[#16f2b3] text-base lg:text-xl">
          {career.role} @ {career.company}
        </p>
        </div>
        
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <p className="text-left lg:text-justify">
          {career.description}
        </p>
        <br/>
         <SkillTags tags={career.skills} />
      </div>
    </div>
  );
};

export default CareerCard;