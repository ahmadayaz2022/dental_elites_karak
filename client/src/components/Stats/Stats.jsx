import { motion } from "framer-motion";
import {
  FaUserMd,
  FaSmileBeam,
  FaTooth,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserMd />,
    number: "10+",
    title: "Years Experience",
    color: "text-sky-700",
  },
  {
    icon: <FaSmileBeam />,
    number: "5000+",
    title: "Happy Patients",
    color: "text-cyan-600",
  },
  {
    icon: <FaTooth />,
    number: "12+",
    title: "Dental Services",
    color: "text-blue-600",
  },
  {
    icon: <FaStar />,
    number: "98%",
    title: "Patient Satisfaction",
    color: "text-amber-500",
  },
];

function Stats() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold text-slate-800">

            Trusted By Thousands

          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">

            We combine advanced dental technology with compassionate care
            to deliver outstanding treatment and beautiful smiles.

          </p>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.15 }}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-10 text-center border border-slate-100"
            >

              <div className={`text-5xl mb-6 ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-slate-800">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-500">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;