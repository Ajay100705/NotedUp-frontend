import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <img
        src="/logo.svg"
        alt="NotedUp Logo"
        className="w-10 h-10 object-contain"
      />
      <h1 className="text-2xl font-bold text-gray-800">NotedUp</h1>
    </div>
  );
};

export default Logo;
