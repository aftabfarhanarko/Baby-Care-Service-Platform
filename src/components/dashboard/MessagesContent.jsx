"use client";
import React from "react";

const MessagesContent = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Messages
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          Your messages will appear here.
        </p>
      </div>
    </div>
  );
};

export default MessagesContent;
