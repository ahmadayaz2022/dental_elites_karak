// import { useEffect, useState } from "react";

// import { Link, NavLink } from "react-router-dom";
// import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Doctors", path: "/doctors" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-white"
//       }`}
//     >
//       {/* Top Bar */}
//       <div className="bg-sky-700 text-white text-sm">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt />
//             <span>+92-300-0000000</span>
//           </div>

//           <div>Mon - Sat : 9:00 AM - 8:00 PM</div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}

//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center text-xl font-bold">
//             DE
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold text-slate-800">Dental Elites</h2>

//             <p className="text-xs text-slate-500">Dental & Aesthetic Clinic</p>
//           </div>
//         </Link>

//         {/* Desktop Menu */}

//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `relative font-medium transition duration-300
//    ${isActive ? "text-sky-700" : "text-slate-700 hover:text-sky-700"}`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           <span
//             className="
// absolute
// left-0
// -bottom-2
// w-0
// h-[2px]
// bg-sky-700
// transition-all
// duration-300
// group-hover:w-full"
//           />

//           <button
//             className="
// primary-btn
// hidden
// lg:flex
// items-center
// gap-2
// "
//           >
//             <FaCalendarAlt />
//             Appointment
//           </button>
//         </div>

//         {/* Mobile Button */}

//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <HiOutlineMenuAlt3 />
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           {navLinks.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className="block px-6 py-4 border-b hover:bg-gray-100"
//             >
//               {item.name}
//             </NavLink>
//           ))}
  

//           <div className="p-5">
//             <button className="w-full bg-sky-700 text-white py-3 rounded-full">
//               Book Appointment
//             </button>
            
//           </div>
//         </div>
        
//       )}

     
      
//     </header>
//   );
// }

// export default Navbar;



import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-white"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-sky-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+92-300-0000000</span>
          </div>
          <div>Mon - Sat : 9:00 AM - 8:00 PM</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center text-xl font-bold">
            DE
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dental Elites</h2>
            <p className="text-xs text-slate-500">Dental & Aesthetic Clinic</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 ${
                  isActive ? "text-sky-700" : "text-slate-700 hover:text-sky-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button className="primary-btn hidden lg:flex items-center gap-2">
            <FaCalendarAlt />
            Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b hover:bg-gray-100"
              >
                {item.name}
              </NavLink>
            ))}
            <div className="p-5">
              <button className="w-full bg-sky-700 text-white py-3 rounded-full">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;