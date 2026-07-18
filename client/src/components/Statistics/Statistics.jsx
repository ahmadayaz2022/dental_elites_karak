import { FaSmile, FaUserMd, FaAward, FaTooth } from "react-icons/fa";

const stats = [
  {
    number: "5000+",
    title: "Happy Patients",
    icon: <FaSmile size={35} />,
  },
  {
    number: "2",
    title: "Expert Doctors",
    icon: <FaUserMd size={35} />,
  },
  {
    number: "10+",
    title: "Years Experience",
    icon: <FaAward size={35} />,
  },
  {
    number: "100%",
    title: "Patient Care",
    icon: <FaTooth size={35} />,
  },
];

function Statistics() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center bg-sky-50 rounded-2xl p-10 hover:shadow-xl transition"
            >
              <div className="text-sky-700 flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-slate-800">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;