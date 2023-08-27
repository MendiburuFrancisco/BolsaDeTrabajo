import React from 'react';

const JobDescription = ({ title, subtitle, subSubtitle, text, button1Label, button2Label }) => {
  return (
    <div className="bg-white p-6 rounded-lg  shadow-md mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h3 className="text-gray-600 mt-1">{subtitle}</h3>
      <h4 className="text-gray-400 mt-1">{subSubtitle}</h4>

      <pre className="mt-4 text-gray-700 font-sans ">{text}</pre>
      {/* <p className="mt-4 text-gray-700">{text}</p> */}
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 text-black rounded">
          {button1Label}
        </button>
        <button className="px-4 py-2 bg-gray-700 text-white rounded">
          {button2Label}
        </button>
      </div>
    </div>
  );
};

export default JobDescription;
