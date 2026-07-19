import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { services } from "../../data/services";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <Container>

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="Our Services"
            title="Complete Dental Care"
            description="We provide comprehensive dental treatments using modern technology to help you achieve a healthy and confident smile."
          />
        </motion.div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group border border-slate-200 overflow-hidden"
              >

                {/* Top Border */}

                <div className="h-2 bg-gradient-to-r from-sky-600 to-cyan-500"></div>

                <div className="p-8">

                  {/* Icon */}

                  <div className="w-20 h-20 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-4xl transition-all duration-300 group-hover:bg-sky-700 group-hover:text-white">

                    <Icon />

                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-2xl font-bold text-slate-800">

                    {service.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-slate-600 leading-8">

                    {service.description}

                  </p>

                  {/* Learn More */}

                  <button className="mt-8 flex items-center gap-2 font-semibold text-sky-700 transition-all duration-300 hover:gap-4">

                    Learn More

                    <FaArrowRight />

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}

export default ServicesSection;