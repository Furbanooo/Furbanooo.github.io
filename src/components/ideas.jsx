import React from "react";
import Footer from "./footer";

const Ideas = () => {
  return (
    <div className="ideas mb-12 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">IDEAS</h2>
      <div className="show-ideas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="idea p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Idea 1</h3>
          <p className="text-sm text-gray-600">
            Description of idea 1 and its potential benefits.
          </p>
        </div>
        <div className="idea p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Idea 2</h3>
          <p className="text-sm text-gray-600">
            Description of idea 2 and its potential benefits.
          </p>
        </div>
        <div className="idea p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Idea 3</h3>
          <p className="text-sm text-gray-600">
            Description of idea 3 and its potential benefits.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ideas;
