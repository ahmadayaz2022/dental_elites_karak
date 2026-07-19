import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaSmileBeam,
} from "react-icons/fa";

const features = [
  "Modern Dental Equipment",
  "Experienced Dental Professionals",
  "Pain-Free Treatment",
  "Personalized Care",
  "Sterilized Instruments",
  "Affordable Treatment Plans",
];

function WhyChooseUs() {
  return (
    <section className="py-28 bg-gradient-to-br from-sky-50 to-white">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
          >

            <p className="section-subtitle">

              WHY CHOOSE US

            </p>

            <h2 className="section-title mt-4">

              Your Smile

              <br/>

              Our Priority

            </h2>

            <p className="mt-8 text-slate-500 leading-8">

              Dental Elites combines modern dental technology,
              experienced professionals, and compassionate care
              to provide outstanding treatment for every patient.

            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {features.map((item)=>(
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle
                    className="text-sky-600 text-xl"
                  />

                  <span>{item}</span>

                </div>
              ))}

            </div>

            <button className="primary-btn mt-12">

              Book Appointment

            </button>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            className="relative"
          >

            <div className="card h-[600px] flex items-center justify-center">

              <div className="text-center">

                <FaSmileBeam
                  className="text-8xl text-sky-600 mx-auto"
                />

                <h3 className="text-4xl font-bold mt-6">

                  Dental Elites

                </h3>

                <p className="mt-4 text-slate-500">

                  Clinic Image Here

                </p>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -top-5 -left-5 bg-white rounded-3xl shadow-xl px-8 py-6">

              <h2 className="text-4xl font-bold text-sky-600">

                10+

              </h2>

              <p>Years Experience</p>

            </div>

            <div className="absolute bottom-5 -right-5 bg-white rounded-3xl shadow-xl px-8 py-6">

              <h2 className="text-4xl font-bold text-sky-600">

                5000+

              </h2>

              <p>Happy Patients</p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;