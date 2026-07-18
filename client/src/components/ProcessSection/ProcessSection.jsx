import { process } from "../../data/process";
import { motion } from "framer-motion";

function ProcessSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sky-700 font-semibold uppercase tracking-[4px]">
            Treatment Process
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            Your Journey to a Healthy Smile
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            We make your dental experience simple, comfortable, and
            stress-free from your first appointment to your final smile.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Line */}
          <div className="hidden lg:block absolute top-14 left-0 w-full h-1 bg-sky-200 rounded-full"></div>

          <div className="grid lg:grid-cols-4 gap-10">

            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="relative text-center"
                >
                  {/* Icon Circle */}

                  <div className="relative z-20 w-28 h-28 rounded-full bg-white border-8 border-sky-100 shadow-xl mx-auto flex items-center justify-center">

                    <Icon className="text-5xl text-sky-700" />

                  </div>

                  {/* Step Number */}

                  <div className="absolute top-2 right-10 lg:right-5 bg-sky-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {step.id}
                  </div>

                  <div className="mt-8">

                    <h3 className="text-2xl font-bold text-slate-800">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-7 mt-4">
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessSection;