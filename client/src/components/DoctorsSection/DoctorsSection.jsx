import { doctors } from "../../data/doctors";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function DoctorsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-sky-700 font-semibold uppercase tracking-widest">
            Our Team
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-3">
            Meet Our Specialists
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Our experienced professionals are dedicated to providing
            exceptional dental care with compassion, precision, and
            modern technology.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {doctors.map((doctor, index) => (

            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <div className="grid md:grid-cols-2">

                {/* Image */}

                <div className="bg-sky-100 h-full">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Content */}

                <div className="p-8">

                  <p className="text-sky-700 font-semibold">
                    {doctor.designation}
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {doctor.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {doctor.qualification}
                  </p>

                  <p className="mt-5 text-gray-600 leading-7">
                    {doctor.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {doctor.specialties.map((item) => (

                      <span
                        key={item}
                        className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="flex justify-between items-center mt-8">

                    <div className="flex gap-3">

                      <a
                        href={doctor.social.facebook}
                        className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-700 hover:text-white transition"
                      >
                        <FaFacebookF />
                      </a>

                      <a
                        href={doctor.social.instagram}
                        className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-700 hover:text-white transition"
                      >
                        <FaInstagram />
                      </a>

                      <a
                        href={doctor.social.linkedin}
                        className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-700 hover:text-white transition"
                      >
                        <FaLinkedinIn />
                      </a>

                    </div>

                    <button className="flex items-center gap-2 text-sky-700 font-semibold hover:gap-3 transition-all">
                      View Profile
                      <FaArrowRight />
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default DoctorsSection;