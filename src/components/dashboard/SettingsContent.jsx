"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Shield } from "lucide-react";

const SettingsContent = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    updates: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    showStatus: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePrivacy = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    {
      title: "Notifications",
      icon: Bell,
      description: "Manage how you receive notifications",
      items: [
        {
          key: "email",
          label: "Email Notifications",
          desc: "Receive emails about your bookings and account",
        },
        {
          key: "push",
          label: "Push Notifications",
          desc: "Receive push notifications on your device",
        },
        {
          key: "sms",
          label: "SMS Notifications",
          desc: "Receive text messages for urgent updates",
        },
        {
          key: "updates",
          label: "Product Updates",
          desc: "Receive news and updates about features",
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      description: "Control your privacy settings",
      items: [
        {
          key: "profileVisibility",
          label: "Public Profile",
          desc: "Allow others to see your profile",
        },
        {
          key: "showStatus",
          label: "Online Status",
          desc: "Show when you are online",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fine-tune your preferences and privacy controls
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-gray-700/60
                         bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl shadow-sm"
            >
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />

              {/* Section Header */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100 dark:border-gray-800">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl
                                bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="px-6 py-6 space-y-6">
                {section.items.map((item) => {
                  const isNotification = section.title === "Notifications";
                  const isChecked = isNotification
                    ? notifications[item.key]
                    : privacy[item.key];
                  const toggle = isNotification
                    ? () => toggleNotification(item.key)
                    : () => togglePrivacy(item.key);

                  return (
                    <div
                      key={item.key}
                      className="flex items-center justify-between gap-6"
                    >
                      <div className="space-y-0.5">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>

                      {/* Premium Toggle */}
                      <button
                        onClick={toggle}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full
                          transition-all duration-300 focus:outline-none focus:ring-2
                          focus:ring-rose-500/60 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                          ${
                            isChecked
                              ? "bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg"
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                      >
                        <span
                          className={`inline-block h-5 w-5 rounded-full bg-white shadow-md
                            transition-transform duration-300
                            ${isChecked ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsContent;
