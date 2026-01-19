"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, MoreVertical, Search, Filter } from 'lucide-react';

const BookingsContent = () => {
  // Mock Data
  const bookings = [
    {
      id: 1,
      sitter: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 4.9
      },
      service: 'Babysitting',
      date: 'March 20, 2024',
      time: '06:00 PM - 10:00 PM',
      location: '123 Main St, New York',
      status: 'Confirmed',
      price: '$60.00',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      id: 2,
      sitter: {
        name: 'Emily Davis',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 4.8
      },
      service: 'Nanny Service',
      date: 'March 22, 2024',
      time: '09:00 AM - 05:00 PM',
      location: '456 Park Ave, New York',
      status: 'Pending',
      price: '$120.00',
      statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    },
    {
      id: 3,
      sitter: {
        name: 'Michael Brown',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 4.7
      },
      service: 'Pet Sitting',
      date: 'March 25, 2024',
      time: '10:00 AM - 02:00 PM',
      location: '789 Broadway, New York',
      status: 'Completed',
      price: '$45.00',
      statusColor: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
    },
    {
      id: 4,
      sitter: {
        name: 'Jessica Wilson',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 5.0
      },
      service: 'House Sitting',
      date: 'March 15, 2024',
      time: '08:00 AM - 08:00 PM',
      location: '321 5th Ave, New York',
      status: 'Cancelled',
      price: '$100.00',
      statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Bookings</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your upcoming and past bookings</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search bookings..." 
              className="pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {bookings.map((booking, index) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <img 
                  src={booking.sitter.image} 
                  alt={booking.sitter.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{booking.service}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">with {booking.sitter.name}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {booking.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {booking.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {booking.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto border-t lg:border-t-0 border-gray-100 dark:border-gray-700 pt-4 lg:pt-0">
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">{booking.price}</p>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mt-1 ${booking.statusColor}`}>
                    {booking.status}
                  </span>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookingsContent;
