import React from "react";

const Skills = () => {
  return (
    <div className="skills-container mb-12 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">SKILLS</h2>
      <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="skill p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Cloud Computing
          </h3>
          <p className="text-sm text-gray-600">
            Description of skills and related experience or knowledge in cloud
            computing.
          </p>
        </div>

        <div className="skill p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Programming
          </h3>
          <p className="text-sm text-gray-600">
            Description of skills and related experience or knowledge in
            programming.
          </p>
        </div>

        <div className="skill p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Networking
          </h3>
          <p className="text-sm text-gray-600">
            Description of skills and related experience or knowledge in
            networking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
