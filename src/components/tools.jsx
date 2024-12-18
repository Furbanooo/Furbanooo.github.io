import React from "react";

const Tools = () => {
  return (
    <div className="tools mb-12 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">TOOLS</h2>
      <div className="show-tools grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="tool p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Programming
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Description of tools and their purposes related to programming.
          </p>
        </div>

        <div className="tool p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Cloud Computing
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Description of tools and their purposes related to cloud computing.
          </p>
        </div>

        <div className="tool p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Networking
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Description of tools and their purposes related to networking.
          </p>
        </div>

        <div className="tool p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Penetration Testing
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Description of tools and their purposes related to penetration
            testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
