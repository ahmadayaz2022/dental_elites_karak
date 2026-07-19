import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-sky-700 via-cyan-600 to-sky-500"></div>

      {/* Decorative Circles */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-2xl"></div>

      <motion.div
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:.7 }}
        className="relative container-custom text-center text-white"
      >

        <span className="uppercase tracking-[4px] text-white/80 font-semibold">

          Book Your Visit

        </span>

        <h2 className="text-5xl md:text-6xl font-bold mt-5">

          Ready For A Healthy Smile?

        </h2>

        <p className="max-w-2xl mx-auto mt-8 text-lg text-white/90 leading-8">

          Schedule your consultation today and let our experienced
          dental professionals help you achieve a healthy,
          confident smile.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <button className="bg-white text-sky-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:scale-105 transition">

            <FaCalendarAlt />

            Book Appointment

            <FaArrowRight />

          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-sky-700 transition">

            <FaPhoneAlt />

            +92-300-0000000

          </button>

        </div>

      </motion.div>

    </section>
  );
}

export default CTA;