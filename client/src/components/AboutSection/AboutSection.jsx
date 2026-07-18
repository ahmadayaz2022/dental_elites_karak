import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaClinicMedical,
  FaUserMd,
} from "react-icons/fa";

function AboutSection() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="bg-gradient-to-br from-sky-600 to-cyan-500 rounded-[35px] h-[520px] flex items-center justify-center shadow-2xl">

              <div className="text-center text-white">

                <FaClinicMedical className="text-8xl mx-auto mb-6" />

                <h2 className="text-3xl font-bold">

                  Dental Elites

                </h2>

                <p className="mt-4 text-lg">

                  Professional Clinic Image

                </p>

              </div>

            </div>

            {/* Floating Experience Card */}

            <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-3xl px-8 py-6">

              <div className="flex items-center gap-4">

                <FaAward className="text-5xl text-sky-700" />

                <div>

                  <h3 className="text-3xl font-bold text-slate-800">

                    10+

                  </h3>

                  <p className="text-gray-500">

                    Years Experience

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="text-sky-700 font-semibold uppercase tracking-widest">

              About Us

            </span>

            <h2 className="text-5xl font-bold text-slate-800 mt-4">

              Creating Healthy &
              Beautiful Smiles

            </h2>

            <p className="text-gray-600 leading-8 mt-8">

              At Dental Elites, we are committed to delivering exceptional
              dental care in a comfortable and welcoming environment.
              Using modern technology and evidence-based treatments,
              we focus on improving oral health while creating confident smiles.

            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="flex items-start gap-4">

                <FaCheckCircle className="text-sky-700 mt-1" />

                <div>

                  <h4 className="font-semibold">

                    Modern Equipment

                  </h4>

                  <p className="text-gray-500 text-sm">

                    Latest dental technology.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaCheckCircle className="text-sky-700 mt-1" />

                <div>

                  <h4 className="font-semibold">

                    Certified Professionals

                  </h4>

                  <p className="text-gray-500 text-sm">

                    Skilled dental experts.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaCheckCircle className="text-sky-700 mt-1" />

                <div>

                  <h4 className="font-semibold">

                    Patient Focused

                  </h4>

                  <p className="text-gray-500 text-sm">

                    Personalized treatment plans.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaCheckCircle className="text-sky-700 mt-1" />

                <div>

                  <h4 className="font-semibold">

                    Trusted Care

                  </h4>

                  <p className="text-gray-500 text-sm">

                    Comfortable & safe procedures.

                  </p>

                </div>

              </div>

            </div>

            <button className="mt-12 bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-full transition">

              Learn More

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;