import { useState } from "react";
import { faqs } from "../../data/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FaqSection() {

  const [active, setActive] = useState(1);

  return (

    <section className="py-28 bg-slate-50">

      <div className="container-custom">

        <div className="text-center mb-16">

          <p className="section-subtitle">

            FAQ

          </p>

          <h2 className="section-title mt-4">

            Frequently Asked Questions

          </h2>

          <p className="section-description mt-5">

            Find answers to the questions patients ask us most often.

          </p>

        </div>

        <div className="max-w-4xl mx-auto space-y-5">

          {faqs.map((item) => (

            <motion.div
              key={item.id}
              layout
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(
                    active === item.id ? null : item.id
                  )
                }
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >

                <h3 className="font-semibold text-lg">

                  {item.question}

                </h3>

                {active === item.id ? (

                  <FaMinus className="text-sky-700" />

                ) : (

                  <FaPlus className="text-sky-700" />

                )}

              </button>

              <AnimatePresence>

                {active === item.id && (

                  <motion.div
                    initial={{
                      height:0,
                      opacity:0
                    }}
                    animate={{
                      height:"auto",
                      opacity:1
                    }}
                    exit={{
                      height:0,
                      opacity:0
                    }}
                  >

                    <p className="px-8 pb-8 text-slate-500 leading-8">

                      {item.answer}

                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FaqSection;