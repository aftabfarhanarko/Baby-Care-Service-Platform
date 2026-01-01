
import React from 'react';

const page = () => {
  return (
    <div>
      Page
    </div>
  );
};

export default page;

// "use client"
// import React, { PageuseState, useEffect, createContext, useContext } from 'react';
// import { Heart, Baby, Users, Stethoscope, Clock, MapPin, CheckCircle, XCircle, User, LogOut, Menu, X, Star, Shield, Headphones, ArrowRight, ChevronDown } from 'lucide-react';

// // Context for Authentication
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// // Sample Services Data
// const services = [
//   {
//     id: 1,
//     name: 'Baby Care Service',
//     icon: Baby,
//     description: 'Professional baby sitting and care services for your little ones',
//     details: 'Our trained babysitters provide comprehensive care including feeding, playing, changing diapers, and ensuring your baby\'s safety and happiness.',
//     charge: 500,
//     features: ['Experienced Caretakers', 'Safety Certified', '24/7 Available', 'Activity Planning']
//   },
//   {
//     id: 2,
//     name: 'Elderly Care Service',
//     icon: Users,
//     description: 'Compassionate care for senior citizens with dignity and respect',
//     details: 'We provide personalized elderly care services including medication management, mobility assistance, companionship, and daily living support.',
//     charge: 600,
//     features: ['Medical Assistance', 'Companion Care', 'Mobility Support', 'Meal Preparation']
//   },
//   {
//     id: 3,
//     name: 'Sick People Service',
//     icon: Stethoscope,
//     description: 'Dedicated nursing and care for patients recovering at home',
//     details: 'Professional nursing care for patients needing medical attention at home, including medication, wound care, and health monitoring.',
//     charge: 700,
//     features: ['Nursing Care', 'Health Monitoring', 'Medication Management', 'Emergency Support']
//   }
// ];

// // Bangladesh Location Data
// const locations = {
//   'Dhaka': ['Dhaka North', 'Dhaka South', 'Savar', 'Keraniganj'],
//   'Chittagong': ['Chittagong City', 'Cox\'s Bazar', 'Comilla', 'Feni'],
//   'Rajshahi': ['Rajshahi City', 'Pabna', 'Natore', 'Bogra'],
//   'Khulna': ['Khulna City', 'Jessore', 'Satkhira', 'Bagerhat'],
//   'Barisal': ['Barisal City', 'Patuakhali', 'Bhola', 'Pirojpur'],
//   'Sylhet': ['Sylhet City', 'Moulvibazar', 'Habiganj', 'Sunamganj'],
//   'Rangpur': ['Rangpur City', 'Dinajpur', 'Thakurgaon', 'Kurigram'],
//   'Mymensingh': ['Mymensingh City', 'Jamalpur', 'Netrokona', 'Sherpur']
// };

// // Navbar Component
// const Navbar = ({ currentPage, setCurrentPage }) => {
//   const { user, logout } = useAuth();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
//             <Heart className="h-8 w-8 text-pink-600" />
//             <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//               Care.xyz
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-pink-600 font-medium transition">Home</button>
//             <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-pink-600 font-medium transition">Services</button>
//             <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-pink-600 font-medium transition">About</button>
            
//             {user ? (
//               <>
//                 <button onClick={() => setCurrentPage('my-bookings')} className="text-gray-700 hover:text-pink-600 font-medium transition">My Bookings</button>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
//                     <User className="h-5 w-5 text-pink-600" />
//                     <span className="text-sm font-medium text-gray-700">{user.name}</span>
//                   </div>
//                   <button onClick={logout} className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition">
//                     <LogOut className="h-5 w-5" />
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <button onClick={() => setCurrentPage('login')} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition transform hover:scale-105">
//                 Login
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 space-y-4">
//             <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded">Home</button>
//             <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded">Services</button>
//             {user ? (
//               <>
//                 <button onClick={() => { setCurrentPage('my-bookings'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 rounded">My Bookings</button>
//                 <div className="px-4 py-2 bg-pink-50 rounded">
//                   <span className="text-sm font-medium">{user.name}</span>
//                 </div>
//                 <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded">Logout</button>
//               </>
//             ) : (
//               <button onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }} className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg">Login</button>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center mb-4">
//               <Heart className="h-8 w-8 text-pink-600" />
//               <span className="ml-2 text-2xl font-bold">Care.xyz</span>
//             </div>
//             <p className="text-gray-400 text-sm">Making caregiving easy, secure, and accessible for everyone.</p>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li className="hover:text-white cursor-pointer transition">Baby Care</li>
//               <li className="hover:text-white cursor-pointer transition">Elderly Care</li>
//               <li className="hover:text-white cursor-pointer transition">Sick People Service</li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Company</h3>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li className="hover:text-white cursor-pointer transition">About Us</li>
//               <li className="hover:text-white cursor-pointer transition">Contact</li>
//               <li className="hover:text-white cursor-pointer transition">Careers</li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>Email: support@care.xyz</li>
//               <li>Phone: +880 1234-567890</li>
//               <li>Address: Dhaka, Bangladesh</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
//           <p>&copy; 2025 Care.xyz. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // Homepage Component
// const Homepage = ({ setCurrentPage, setSelectedService }) => {
//   const testimonials = [
//     { name: 'Fatima Rahman', role: 'Mother', text: 'Amazing service! The babysitter was professional and my kids loved her.', rating: 5 },
//     { name: 'Kamal Hossain', role: 'Son', text: 'Great elderly care for my father. Very reliable and compassionate.', rating: 5 },
//     { name: 'Nasrin Akter', role: 'Daughter', text: 'Professional nursing care helped my mother recover quickly at home.', rating: 5 }
//   ];

//   return (
//     <div>
//       {/* Hero Banner */}
//       <div className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
//         }}></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Trusted Care Services for Your Loved Ones
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-pink-100">
//               Professional caregiving made simple, secure, and accessible. Find verified caretakers for babies, elderly, and patients.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center">
//                 Browse Services <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//               <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div>
//               <div className="text-5xl font-bold text-pink-600 mb-2">5000+</div>
//               <div className="text-gray-600 text-lg">Happy Families</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold text-purple-600 mb-2">1000+</div>
//               <div className="text-gray-600 text-lg">Verified Caretakers</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold text-indigo-600 mb-2">98%</div>
//               <div className="text-gray-600 text-lg">Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Care.xyz?</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're committed to providing the highest quality care services with verified professionals</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
//               <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//                 <Shield className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Professionals</h3>
//               <p className="text-gray-600">All caretakers undergo thorough background checks and verification processes</p>
//             </div>
            
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
//               <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//                 <Clock className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
//               <p className="text-gray-600">Round-the-clock services available whenever you need care for your loved ones</p>
//             </div>
            
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
//               <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//                 <Headphones className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
//               <p className="text-gray-600">Our customer support team is always ready to assist you with any concerns</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div id="services" className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Care Services</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional care tailored to your family's needs</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map(service => {
//               const Icon = service.icon;
//               return (
//                 <div key={service.id} className="bg-gradient-to-br from-white to-pink-50 border-2 border-pink-100 rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105 cursor-pointer" onClick={() => { setSelectedService(service); setCurrentPage('service-detail'); }}>
//                   <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
//                     <Icon className="h-10 w-10 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
//                   <p className="text-gray-600 mb-6">{service.description}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold text-pink-600">৳{service.charge}/hr</span>
//                     <ArrowRight className="h-6 w-6 text-purple-600" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Families Say</h2>
//             <p className="text-xl text-gray-600">Real experiences from our satisfied customers</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, idx) => (
//               <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
//                 <div>
//                   <div className="font-bold text-gray-900">{testimonial.name}</div>
//                   <div className="text-sm text-gray-500">{testimonial.role}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Service Detail Page
// const ServiceDetail = ({ service, setCurrentPage, setSelectedService }) => {
//   const { user } = useAuth();
//   const Icon = service.icon;

//   const handleBookService = () => {
//     if (user) {
//       setCurrentPage('booking');
//     } else {
//       setCurrentPage('login');
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-12">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <button onClick={() => setCurrentPage('home')} className="mb-6 text-pink-600 hover:text-pink-700 font-medium flex items-center">
//           ← Back to Services
//         </button>
        
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-12 text-white">
//             <div className="flex items-center mb-6">
//               <div className="bg-white bg-opacity-20 p-4 rounded-2xl">
//                 <Icon className="h-16 w-16" />
//               </div>
//               <div className="ml-6">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.name}</h1>
//                 <p className="text-xl text-pink-100">{service.description}</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="p-12">
//             <div className="mb-10">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
//               <p className="text-lg text-gray-600 leading-relaxed">{service.details}</p>
//             </div>
            
//             <div className="mb-10">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Features Included</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {service.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl">
//                     <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
//                     <span className="text-gray-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//                 <div>
//                   <div className="text-sm text-gray-600 mb-2">Starting from</div>
//                   <div className="text-5xl font-bold text-pink-600 mb-2">৳{service.charge}</div>
//                   <div className="text-gray-600">per hour</div>
//                 </div>
//                 <button onClick={handleBookService} className="mt-6 md:mt-0 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
//                   Book Service Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Booking Page
// const BookingPage = ({ service, setCurrentPage }) => {
//   const { user } = useAuth();
//   const [duration, setDuration] = useState(1);
//   const [durationType, setDurationType] = useState('hours');
//   const [division, setDivision] = useState('');
//   const [district, setDistrict] = useState('');
//   const [area, setArea] = useState('');
//   const [address, setAddress] = useState('');
//   const [showSuccess, setShowSuccess] = useState(false);

//   const calculateTotal = () => {
//     const multiplier = durationType === 'hours' ? 1 : 24;
//     return duration * service.charge * multiplier;
//   };

//   const handleBooking = () => {
//     if (!division || !district || !address) {
//       alert('Please fill all required fields');
//       return;
//     }

//     const booking = {
//       id: Date.now(),
//       serviceId: service.id,
//       serviceName: service.name,
//       duration: `${duration} ${durationType}`,
//       location: `${area}, ${district}, ${division}`,
//       address,
//       totalCost: calculateTotal(),
//       status: 'Pending',
//       date: new Date().toLocaleDateString()
//     };

//     const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
//     existingBookings.push(booking);
//     localStorage.setItem('bookings', JSON.stringify(existingBookings));

//     setShowSuccess(true);
//     setTimeout(() => {
//       setCurrentPage('my-bookings');
//     }, 2000);
//   };

//   return (
//     <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 text-white">
//             <h1 className="text-4xl font-bold mb-2">Book {service.name}</h1>
//             <p className="text-pink-100">Complete the form below to book your service</p>
//           </div>
          
//           <div className="p-8 md:p-12">
//             {showSuccess ? (
//               <div className="text-center py-12">
//                 <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Successful!</h2>
//                 <p className="text-gray-600 text-lg">Redirecting to your bookings...</p>
//               </div>
//             ) : (
//               <>
//                 {/* Duration */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-bold text-gray-700 mb-3">Duration *</label>
//                   <div className="grid grid-cols-2 gap-4">
//                     <input type="number" min="1" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg" />
//                     <select value={durationType} onChange={(e) => setDurationType(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg">
//                       <option value="hours">Hours</option>
//                       <option value="days">Days</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Division */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-bold text-gray-700 mb-3">Division *</label>
//                   <select value={division} onChange={(e) => { setDivision(e.target.value); setDistrict(''); }} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg">
//                     <option value="">Select Division</option>
//                     {Object.keys(locations).map(div => (
//                       <option key={div} value={div}>{div}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* District */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-bold text-gray-700 mb-3">District *</label>
//                   <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!division} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg disabled:bg-gray-100">
//                     <option value="">Select District</option>
//                     {division && locations[division].map(dist => (
//                       <option key={dist} value={dist}>{dist}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Area */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-bold text-gray-700 mb-3">Area / City</label>
//                   <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Enter area or city name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg" />
//                 </div>

//                 {/* Address */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-bold text-gray-700 mb-3">Full Address *</label>
//                   <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House/Flat no, Road, Block..." rows="3" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg resize-none"></textarea>
//                 </div>

//                 {/* Total Cost */}
//                 <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl mb-8">
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-semibold text-gray-700">Total Cost:</span>
//                     <span className="text-4xl font-bold text-pink-600">৳{calculateTotal()}</span>
//                   </div>
//                   <div className="text-sm text-gray-600 mt-2">
//                     {duration} {durationType} × ৳{service.charge}/hr {durationType === 'days' && '× 24 hours'}
//                   </div>
//                 </div>

//                 <button onClick={handleBooking} className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
//                   Confirm Booking
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // My Bookings Page
// const MyBookingsPage = ({ setCurrentPage, setSelectedService }) => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
//     setBookings(stored);
//   }, []);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
//       case 'Confirmed': return 'bg-green-100 text-green-800 border-green-300';
//       case 'Completed': return 'bg-blue-100 text-blue-800 border-blue-300';
//       case 'Cancelled': return 'bg-red-100 text-red-800 border-red-300';
//       default: return 'bg-gray-100 text-gray-800 border-gray-300';
//     }
//   };

//   const cancelBooking = (id) => {
//     const updated = bookings.map(b => b.id === id ? {...b, status: 'Cancelled'} : b);
//     setBookings(updated);
//     localStorage.setItem('bookings', JSON.stringify(updated));
//   };

//   return (
//     <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">My Bookings</h1>
        
//         {bookings.length === 0 ? (
//           <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
//             <div className="text-gray-400 mb-6">
//               <Clock className="h-24 w-24 mx-auto" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">No Bookings Yet</h2>
//             <p className="text-gray-600 mb-8">Start booking care services for your loved ones</p>
//             <button onClick={() => setCurrentPage('home')} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
//               Browse Services
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-6">
//             {bookings.map(booking => (
//               <div key={booking.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
//                 <div className="p-6 md:p-8">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{booking.serviceName}</h3>
//                       <div className="flex flex-wrap gap-4 text-gray-600">
//                         <div className="flex items-center">
//                           <Clock className="h-5 w-5 mr-2 text-pink-600" />
//                           <span>{booking.duration}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin className="h-5 w-5 mr-2 text-purple-600" />
//                           <span>{booking.location}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-4 md:mt-0">
//                       <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2 ${getStatusColor(booking.status)}`}>
//                         {booking.status}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="border-t border-gray-200 pt-6">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">Booking Date</div>
//                         <div className="font-semibold text-gray-900">{booking.date}</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">Address</div>
//                         <div className="font-semibold text-gray-900">{booking.address}</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">Total Cost</div>
//                         <div className="text-2xl font-bold text-pink-600">৳{booking.totalCost}</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <button className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition">
//                         View Details
//                       </button>
//                       {booking.status === 'Pending' && (
//                         <button onClick={() => cancelBooking(booking.id)} className="flex-1 bg-red-50 text-red-600 border-2 border-red-200 px-6 py-3 rounded-xl font-semibold hover:bg-red-100 transition">
//                           Cancel Booking
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Login Page
// const LoginPage = ({ setCurrentPage }) => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       alert('Please fill all fields');
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//       login(user);
//       setCurrentPage('home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 min-h-screen flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="p-8 md:p-12">
//             <div className="text-center mb-8">
//               <Heart className="h-16 w-16 text-pink-600 mx-auto mb-4" />
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
//               <p className="text-gray-600">Login to access your account</p>
//             </div>
            
//             <form onSubmit={handleLogin}>
//               <div className="mb-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg" placeholder="your@email.com" />
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg" placeholder="••••••••" />
//               </div>
              
//               <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105 mb-4">
//                 Login
//               </button>
              
//               <div className="text-center">
//                 <span className="text-gray-600">Don't have an account? </span>
//                 <button type="button" onClick={() => setCurrentPage('register')} className="text-pink-600 font-semibold hover:text-pink-700">
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Registration Page
// const RegistrationPage = ({ setCurrentPage }) => {
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     nid: '',
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const validatePassword = (pwd) => {
//     const hasUpper = /[A-Z]/.test(pwd);
//     const hasLower = /[a-z]/.test(pwd);
//     const isLongEnough = pwd.length >= 6;
//     return hasUpper && hasLower && isLongEnough;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
    
//     if (!formData.nid || !formData.name || !formData.email || !formData.contact || !formData.password) {
//       alert('Please fill all fields');
//       return;
//     }

//     if (!validatePassword(formData.password)) {
//       alert('Password must be at least 6 characters with 1 uppercase and 1 lowercase letter');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem('users') || '[]');
    
//     if (users.find(u => u.email === formData.email)) {
//       alert('Email already registered');
//       return;
//     }

//     const newUser = {
//       id: Date.now(),
//       nid: formData.nid,
//       name: formData.name,
//       email: formData.email,
//       contact: formData.contact,
//       password: formData.password
//     };

//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
    
//     login(newUser);
//     setCurrentPage('home');
//   };

//   return (
//     <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 min-h-screen flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="p-8 md:p-12">
//             <div className="text-center mb-8">
//               <Heart className="h-16 w-16 text-pink-600 mx-auto mb-4" />
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
//               <p className="text-gray-600">Join Care.xyz today</p>
//             </div>
            
//             <form onSubmit={handleRegister}>
//               <div className="mb-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">NID Number</label>
//                 <input type="text" value={formData.nid} onChange={(e) => setFormData({...formData, nid: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none" placeholder="Enter NID" />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
//                 <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none" placeholder="Your name" />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
//                 <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none" placeholder="your@email.com" />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Contact Number</label>
//                 <input type="tel" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none" placeholder="+880 1234-567890" />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
//                 <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none" placeholder="••••••••" />
//                 <p className="text-xs text-gray-500 mt-1">Min 6 characters, 1 uppercase, 1 lowercase</p>
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Confirm Password</label>
//                 <input type="password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none" placeholder="••••••••" />
//               </div>
              
//               <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105 mb-4">
//                 Register
//               </button>
              
//               <div className="text-center">
//                 <span className="text-gray-600">Already have an account? </span>
//                 <button type="button" onClick={() => setCurrentPage('login')} className="text-pink-600 font-semibold hover:text-pink-700">
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Error 404 Page
// const ErrorPage = ({ setCurrentPage }) => {
//   return (
//     <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen flex items-center justify-center py-12 px-4">
//       <div className="text-center">
//         <div className="text-9xl font-bold text-pink-600 mb-4">404</div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
//         <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
//         <button onClick={() => setCurrentPage('home')} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
//           Go Back Home
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [selectedService, setSelectedService] = useState(services[0]);

//   return (
//     <AuthProvider>
//       <div className="min-h-screen flex flex-col">
//         <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
//         <main className="flex-grow">
//           {currentPage === 'home' && <Homepage setCurrentPage={setCurrentPage} setSelectedService={setSelectedService} />}
//           {currentPage === 'service-detail' && <ServiceDetail service={selectedService} setCurrentPage={setCurrentPage} setSelectedService={setSelectedService} />}
//           {currentPage === 'booking' && <BookingPage service={selectedService} setCurrentPage={setCurrentPage} />}
//           {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
//           {currentPage === 'register' && <RegistrationPage setCurrentPage={setCurrentPage} />}
//           {currentPage === 'my-bookings' && <MyBookingsPage setCurrentPage={setCurrentPage} setSelectedService={setSelectedService} />}
//           {currentPage === '404' && <ErrorPage setCurrentPage={setCurrentPage} />}
//         </main>
        
//         <Footer />
//       </div>
//     </AuthProvider>
//   );
// };

// export default App;