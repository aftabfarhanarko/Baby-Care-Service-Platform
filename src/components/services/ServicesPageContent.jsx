"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Baby,
  Users,
  Stethoscope,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServicesPageContent = () => {
  const services = [
    {
      id: 1,
      name: "Baby Care",
      icon: Baby,
      description:
        "Professional babysitting for your little ones. Safe, fun, and educational activities included.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
      priceVal: 15,
      features: [
        "Certified Babysitters",
        "Educational Activities",
        "Meal Preparation",
        "Bedtime Routines",
      ],
    },
    {
      id: 2,
      name: "Elderly Care",
      icon: Users,
      description:
        "Compassionate companionship and assistance with daily activities for your seniors.",
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
      priceVal: 20,
      features: [
        "Medication Reminders",
        "Mobility Assistance",
        "Companionship",
        "Light Housekeeping",
      ],
    },
    {
      id: 3,
      name: "Sick Care",
      icon: Stethoscope,
      description:
        "Dedicated support for recovery and health monitoring by certified nurses.",
      color: "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400",
      priceVal: 25,
      features: [
        "Certified Nurses",
        "Vitals Monitoring",
        "Medication Administration",
        "Post-Op Care",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect care plan for your family. All our services come
            with verified professionals and 24/7 support.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $
                  <CountUp
                    end={service.priceVal}
                    duration={2}
                    separator=","
                  />
                </span>
                <span className="text-gray-500 dark:text-gray-400">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Details
                </Link>
                <Link
                  href={`/booking/${service.id}`}
                  className="block w-full py-3 px-4 bg-rose-600 text-white rounded-xl font-semibold text-center hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 dark:shadow-rose-900/30 flex items-center justify-center group-hover:gap-2"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 hidden group-hover:block transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do you vet your caregivers?",
                a: "All our caregivers undergo rigorous background checks, including criminal records, reference verification, and skill assessments.",
              },
              {
                q: "What if I need to cancel my booking?",
                a: "We offer free cancellation up to 24 hours before the scheduled service. Late cancellations may incur a small fee.",
              },
              {
                q: "Are your services insured?",
                a: "Yes, all our services are fully insured and bonded for your peace of mind and protection.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPageContent;
