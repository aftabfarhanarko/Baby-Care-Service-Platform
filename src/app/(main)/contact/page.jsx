"use client";
import React from 'react';
import FillFrom from '@/components/contact/FillFrom';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Clock, MapPin, Heart, ShieldCheck, Sparkles } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="min-h-screen  dark:bg-gray-900 transition-colors duration-300 font-sans">
             {/* Background Elements */}
             <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Premium Header / Hero */}
            <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[50%] left-[20%] w-[800px] h-[800px] bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
                </div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-bold tracking-wide uppercase mb-6 border border-rose-100 dark:border-rose-500/20 shadow-sm">
                            <MessageCircle className="w-4 h-4 fill-current" />
                            24/7 Support Center
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                            Get in Touch With <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">Our Care Team</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Have questions about our services or need assistance with a booking? We're here to help you every step of the way.
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {[
                                { icon: Clock, text: "Fast Response Time" },
                                { icon: ShieldCheck, text: "Verified Support" },
                                { icon: Heart, text: "Dedicated Care Agents" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200">
                                    <feature.icon className="w-4 h-4 text-rose-500" />
                                    {feature.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Form Section */}
            <div className="relative z-10 -mt-10 pb-20 px-4">
                <FillFrom />
            </div>
        </div>
    );
};

export default ContactPage;
