"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getServerData } from "@/actions/serverData/getData";
import CountUp from "react-countup";
import {
  Baby,
  Users,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  HeartHandshake,
  Activity,
  Brain,
  Heart,
  Utensils,
  Accessibility,
  Pill,
  Pause,
  Puzzle,
  Bandage,
  Infinity,
  Car,
  Home,
  Moon,
  BrainCircuit,
  Mic,
  Book,
  Droplet,
  Armchair,
  HeartPulse,
  Bus,
  Building,
  Waves,
  Ambulance,
  PawPrint,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
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

const iconMap = {
  Baby,
  Users,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  HeartHandshake,
  Activity,
  Brain,
  Heart,
  Utensils,
  Accessibility,
  Pill,
  Pause,
  Puzzle,
  Bandage,
  Infinity,
  Car,
  Home,
  Moon,
  BrainCircuit,
  Mic,
  Book,
  Droplet,
  Armchair,
  HeartPulse,
  Bus,
  Building,
  Waves,
  Ambulance,
  PawPrint,
};

const ServicesPageContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  // Removed local isLoading state in favor of React Query's status

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentSort = searchParams.get("sort") || "";
  const itemsPerPage = 6;

  // React Query Implementation
  const {
    data: queryData,
    isLoading: isQueryLoading,
    isFetching,
  } = useQuery({
    queryKey: [
      "services",
      { page: currentPage, search: searchTerm, sort: currentSort },
    ],
    queryFn: () =>
      getServerData({
        page: currentPage,
        search: searchTerm,
        sort: currentSort,
      }),
    placeholderData: keepPreviousData,
  });

  const data = queryData?.services || [];
  const totalCount = queryData?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const isLoading = isQueryLoading || isFetching;

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      const currentParamSearch = params.get("search") || "";

      if (searchTerm !== currentParamSearch) {
        if (searchTerm) {
          params.set("search", searchTerm);
        } else {
          params.delete("search");
        }
        params.set("page", "1");
        router.push(`${pathname}?${params.toString()}`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, router, pathname, searchParams]);

  const handleSort = (e) => {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set("sort", val);
    } else {
      params.delete("sort");
    }
    params.set("page", "1"); // Reset to page 1 on sort change
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect care plan for your family. All our services come
            with verified professionals and 24/7 support.
          </p>
        </motion.div>

        {/* Controls Section: Search and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={currentSort}
              onChange={handleSort}
              className="w-full md:w-48 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white appearance-none cursor-pointer"
            >
              <option value="">Sort by Price</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </motion.div>

        {/* Services Grid with Loading Overlay */}
        <div className="relative min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-gray-50/80 dark:bg-gray-900/80 flex items-center justify-center backdrop-blur-sm rounded-2xl transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-rose-600 dark:border-rose-500"></div>
                <p className="text-gray-600 dark:text-gray-300 font-medium animate-pulse">
                  Loading services...
                </p>
              </div>
            </div>
          )}

          {!isLoading && data.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                We couldn't find any services matching your criteria. Try
                adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  router.push(pathname);
                }}
                className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {data.map((service) => {
                const IconComponent = iconMap[service.icon] || Baby; // Fallback icon
                return (
                  <motion.div
                    key={service._id || service.id}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                  >
                    <div
                      className={`w-14 h-14 ${
                        service.color || "bg-blue-100 text-blue-600"
                      } rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8" />
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
                      <span className="text-gray-500 dark:text-gray-400">
                        /hour
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features?.map((feature, idx) => (
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
                        href={`/services/${service._id || service.id}`}
                        className="block w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/booking/${service._id || service.id}`}
                        className="block w-full py-3 px-4 bg-rose-600 text-white rounded-xl font-semibold text-center hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 dark:shadow-rose-900/30 flex items-center justify-center group-hover:gap-2"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 hidden group-hover:block transition-all" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isLoading}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={isLoading}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-rose-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                } ${isLoading ? "cursor-not-allowed opacity-70" : ""}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isLoading}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPageContent;
