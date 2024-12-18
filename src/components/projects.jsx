import React from "react";

const Projects = () => {
  return (
    <div className="projects mb-12 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">PROJECTS</h2>
      <div className="show-projects grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="project p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Completed Projects
          </h3>
          <p className="text-sm text-gray-600">
            Description of completed projects and their outcomes.
          </p>
        </div>
        <div className="project p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Ongoing Projects
          </h3>
          <p className="text-sm text-gray-600">
            Description of ongoing projects and their objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
