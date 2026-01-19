import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center pt-24">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-rose-600 dark:border-rose-500"></div>
        <p className="text-gray-600 dark:text-gray-300 font-medium animate-pulse">
          Loading services...
        </p>
      </div>
    </div>
  );
};

export default Loading;
