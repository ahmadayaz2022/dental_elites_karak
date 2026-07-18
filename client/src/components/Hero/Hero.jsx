import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaAward,
  FaSmile,
  FaTooth,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-50 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50 translate-x-20 translate-y-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-sky-100 text-sky-700 font-semibold px-5 py-2 rounded-full">
              🦷 Welcome to Dental Elites
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              Creating
              <span className="text-sky-700"> Healthy </span>
              &
              <span className="text-sky-700"> Beautiful </span>
              Smiles
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Dental Elites provides high-quality dental care using modern
              technology and experienced professionals. We are committed to
              delivering comfortable, safe, and personalized treatment for every
              patient.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-sky-700 hover:bg-sky-800 text-white px-7 py-4 rounded-full flex items-center gap-3 transition duration-300 shadow-lg">
                <FaCalendarAlt />
                Book Appointment
              </button>

              <button className="border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white px-7 py-4 rounded-full flex items-center gap-3 transition duration-300">
                <FaPhoneAlt />
                Call Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-sky-700" />
                <span>Modern Equipment</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-sky-700" />
                <span>Expert Doctors</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-sky-700" />
                <span>Pain-Free Treatment</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-sky-700" />
                <span>Affordable Care</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Doctor Image Placeholder */}
            <div className="w-full max-w-md mx-auto h-[550px] bg-gradient-to-b from-sky-100 to-cyan-100 rounded-[40px] shadow-2xl flex items-center justify-center border border-sky-200">
              <div className="text-center px-6">
                <FaTooth className="text-7xl text-sky-700 mx-auto mb-5" />

                <h2 className="text-3xl font-bold text-slate-800">
                  Dental Elites
                </h2>

                <p className="text-gray-600 mt-3">
                  Replace this placeholder with a professional doctor or clinic
                  image.
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-10 -left-5 bg-white rounded-2xl shadow-xl p-5">
              <div className="flex items-center gap-3">
                <FaSmile className="text-sky-700 text-3xl" />
                <div>
                  <h3 className="font-bold text-xl">5000+</h3>
                  <p className="text-gray-500 text-sm">Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 -right-5 bg-white rounded-2xl shadow-xl p-5">
              <div className="flex items-center gap-3">
                <FaAward className="text-sky-700 text-3xl" />
                <div>
                  <h3 className="font-bold text-xl">10+</h3>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Doctors Card */}
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-6 py-4">
              <p className="font-semibold text-slate-800">
                Our Specialists
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Dr. Amir Khattak — Dental Surgeon
              </p>

              <p className="text-sm text-gray-500">
                Mr. Anwar Khattak — Dental Technologist
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;