
"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, BookOpen, Moon, Plane, Coffee } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Diffrent = () => {
  const occasions = [
    { title: "Date Night", icon: Moon, color: "bg-indigo-100 text-indigo-600" },
    {
      title: "After School",
      icon: BookOpen,
      color: "bg-orange-100 text-orange-600",
    },
    { title: "Travel Nanny", icon: Plane, color: "bg-sky-100 text-sky-600" },
    {
      title: "Overnight",
      icon: Coffee,
      color: "bg-purple-100 text-purple-600",
    },
  ];
  const topCaregivers = [
    {
      name: "Sarah M.",
      role: "Certified Nanny",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "David R.",
      role: "Elderly Specialist",
      rating: 5.0,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Jessica T.",
      role: "Pediatric Nurse",
      rating: 4.8,
      reviews: 215,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Maria G.",
      role: "Special Needs Care",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div>
      {/* 4.2 Occasions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 pb-1">
              Care for Every Moment
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Whatever your schedule, we have a sitter for that.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {occasions.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-gray-100 hover:border-rose-100 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 mx-auto ${item.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4.5 Featured Caregivers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-semibold tracking-wide uppercase text-sm text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                Top Rated
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 pb-1">
                Meet Our Caregivers
              </h2>
            </div>
            <Link
              href="/caregivers"
              className="hidden md:flex items-center text-rose-600 font-semibold hover:text-rose-700"
            >
              View All Caregivers <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {topCaregivers.map((caregiver, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative"
              >
                <div
                  className={`aspect-[3/4]  rounded-2xl mb-4 overflow-hidden relative`}
                >
                  <img src={caregiver.image}></img>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {caregiver.name}
                </h3>
                <p className="text-rose-600 font-medium text-sm mb-2">
                  {caregiver.role}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-bold text-gray-900 mr-1">
                    {caregiver.rating}
                  </span>
                  <span>({caregiver.reviews} reviews)</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Diffrent;
