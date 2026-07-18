import { motion } from "framer-motion";
import { services } from "../../data/services";
import { FaArrowRight } from "react-icons/fa";

function ServicesSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-sky-700 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            Complete Dental Care
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-8">
            We provide comprehensive dental treatments using modern
            technology to help you achieve a healthy and confident smile.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*0.1 }}
                whileHover={{
                  y:-12
                }}
                className="group bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >

                {/* Top Gradient */}

                <div className="h-2 bg-gradient-to-r from-sky-600 to-cyan-500"></div>

                <div className="p-8">

                  <div className="w-20 h-20 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-700 text-4xl mb-6 group-hover:bg-sky-700 group-hover:text-white transition">

                    <Icon />

                  </div>

                  <h3 className="text-2xl font-bold text-slate-800">

                    {service.title}

                  </h3>

                  <p className="text-gray-600 mt-5 leading-7">

                    {service.description}

                  </p>

                  <button className="mt-8 flex items-center gap-3 text-sky-700 font-semibold group-hover:gap-5 transition-all">

                    Learn More

                    <FaArrowRight />

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;