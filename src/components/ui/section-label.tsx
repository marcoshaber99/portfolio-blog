import React from "react";

const SectionLabel: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="inline-flex items-center justify-center">
      <span className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 dark:from-blue-800 dark:to-blue-950 dark:hover:from-blue-700 dark:hover:to-blue-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
        <span className="relative z-10">{text}</span>
        <span className="absolute inset-0 rounded-full bg-white opacity-10 dark:opacity-20"></span>
      </span>
    </div>
  );
};

export default SectionLabel;
