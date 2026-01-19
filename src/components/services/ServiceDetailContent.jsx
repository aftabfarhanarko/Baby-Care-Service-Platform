"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  Calendar,
} from "lucide-react";

const ServiceDetailContent = () => {
  

  // Mock Data (In a real app, fetch from API)
  const services = [
    {
      id: 1,
      name: "Baby Care Service",
      description:
        "Professional baby sitting and care services for your little ones.",
      longDescription:
        "Our trained babysitters provide comprehensive care including feeding, playing, changing diapers, and ensuring your baby's safety and happiness. We understand that every child is unique, and our caregivers are adaptable to your specific routine.",
      price: 500,
      features: [
        "Experienced Caretakers",
        "Safety Certified",
        "24/7 Available",
        "Activity Planning",
        "Emergency First Aid",
      ],
      image: "bg-blue-100",
    },
    {
      id: 2,
      name: "Elderly Care Service",
      description:
        "Compassionate care for senior citizens with dignity and respect.",
      longDescription:
        "We provide personalized elderly care services including medication management, mobility assistance, companionship, and daily living support. Our goal is to improve quality of life while ensuring safety and comfort.",
      price: 600,
      features: [
        "Medical Assistance",
        "Companion Care",
        "Mobility Support",
        "Meal Preparation",
        "Health Monitoring",
      ],
      image: "bg-purple-100",
    },
    {
      id: 3,
      name: "Sick People Service",
      description:
        "Dedicated nursing and care for patients recovering at home.",
      longDescription:
        "Professional nursing care for patients needing medical attention at home, including medication, wound care, and health monitoring. Our nurses are certified and experienced in handling various medical conditions.",
      price: 700,
      features: [
        "Nursing Care",
        "Health Monitoring",
        "Medication Management",
        "Emergency Support",
        "Post-Op Care",
      ],
      image: "bg-rose-100",
    },
  ];

  const service = services.find((s) => s.id === parseInt(service_id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Service Not Found
          </h2>
          <Link
            href="/services"
            className="text-rose-600 dark:text-rose-400 hover:underline mt-4 block"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/services"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Image & Quick Info */}
          <div>
            <div
              className={`h-96 rounded-2xl ${service.image} flex items-center justify-center mb-8`}
            >
              {/* Placeholder for actual image */}
              <span className="text-6xl font-bold text-gray-400 opacity-50">
                {service.name}
              </span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Service Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5 text-rose-500 mr-3" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-rose-500 mr-3" />
                  <span>Nationwide</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-rose-500 mr-3" />
                  <span>Verified Pros</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-rose-500 mr-3" />
                  <span>Flexible Booking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Booking */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                What's Included
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Starting from
                </p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${service.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    /day
                  </span>
                </div>
              </div>
              <Link
                href={`/booking/${service.id}`}
                className="px-8 py-4 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 dark:shadow-rose-900/30 flex items-center"
              >
                Book Now
                <DollarSign className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailContent;
