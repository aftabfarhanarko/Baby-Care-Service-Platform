"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Calendar, MapPin, DollarSign, Clock, CheckCircle } from "lucide-react";

const BookingPageContent = () => {
    const params = useParams();
    const router = useRouter();
    const { data: session, status } = useSession();
    const { service_id } = params;
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Mock Service Data
    const services = {
        1: { name: 'Baby Care Service', price: 500 },
        2: { name: 'Elderly Care Service', price: 600 },
        3: { name: 'Sick People Service', price: 700 }
    };

    const service = services[service_id] || { name: "Unknown Service", price: 0 };

    // Form State
    const [formData, setFormData] = useState({
        duration: 1,
        durationType: "days",
        division: "",
        district: "",
        city: "",
        address: "",
        date: "",
    });

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    const calculateTotal = () => {
        let multiplier = formData.duration;
        if (formData.durationType === "hours") {
             return (service.price / 8) * formData.duration;
        }
        return service.price * formData.duration;
    };

    const totalCost = calculateTotal();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleConfirmBooking = () => {
        setLoading(true);
        setTimeout(() => {
            const booking = {
                id: Date.now(),
                serviceId: service_id,
                serviceName: service.name,
                ...formData,
                totalCost,
                status: "Pending",
                dateCreated: new Date().toISOString()
            };

            const existingBookings = JSON.parse(localStorage.getItem("careBookings") || "[]");
            localStorage.setItem("careBookings", JSON.stringify([booking, ...existingBookings]));

            setLoading(false);
            router.push("/dashboard/bookings");
        }, 1500);
    };

    if (status === "loading" || status === "unauthenticated") return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 transition-colors duration-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="bg-gray-900 dark:bg-black px-8 py-6 text-white">
                        <h1 className="text-2xl font-bold">Book {service.name}</h1>
                        <p className="text-gray-400 mt-1">Complete the details below to schedule your care service.</p>
                    </div>

                    <div className="p-8">
                        <div className="space-y-8">
                            {/* Section 1: Duration */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-rose-600 dark:text-rose-500" />
                                    Duration & Timing
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Date</label>
                                        <input 
                                            type="date" 
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration</label>
                                            <input 
                                                type="number" 
                                                name="duration"
                                                min="1"
                                                value={formData.duration}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Unit</label>
                                            <select 
                                                name="durationType"
                                                value={formData.durationType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                                            >
                                                <option value="days">Days</option>
                                                <option value="hours">Hours</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Location */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-rose-600 dark:text-rose-500" />
                                    Location Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Division</label>
                                        <input 
                                            type="text" 
                                            name="division"
                                            placeholder="e.g. Dhaka"
                                            value={formData.division}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">District</label>
                                        <input 
                                            type="text" 
                                            name="district"
                                            placeholder="e.g. Dhaka"
                                            value={formData.district}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Address</label>
                                    <textarea 
                                        name="address"
                                        rows="3"
                                        placeholder="House No, Road No, Area..."
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Section 3: Cost Summary */}
                            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <DollarSign className="w-5 h-5 mr-2 text-rose-600 dark:text-rose-500" />
                                    Cost Summary
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Service Rate</span>
                                        <span>${service.price} / day</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Duration</span>
                                        <span>{formData.duration} {formData.durationType}</span>
                                    </div>
                                    <div className="h-px bg-gray-200 dark:bg-gray-600 my-2"></div>
                                    <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                                        <span>Total Amount</span>
                                        <span>${totalCost.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <button 
                                    onClick={() => router.back()}
                                    className="w-full py-3 px-6 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleConfirmBooking}
                                    disabled={loading}
                                    className="w-full py-3 px-6 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 dark:shadow-rose-900/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            Confirm Booking
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPageContent;
