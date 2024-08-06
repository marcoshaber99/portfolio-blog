import React from "react";

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div className="group inline-flex items-center justify-center">
      <span
        className="px-3 py-1 text-xs font-medium transition-all duration-300 ease-in-out
                     bg-gray-200 border border-gray-200 rounded-full
                     dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
                     group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200
                     dark:group-hover:bg-gray-700 dark:group-hover:text-blue-400 dark:group-hover:border-blue-500"
      >
        {skill}
      </span>
    </div>
  );
};

export default SkillBadge;
