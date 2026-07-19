import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Container from "../UI/Container";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20">

      <Container>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Clinic Info */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-xl font-bold">
                DE
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Dental Elites
                </h2>

                <p className="text-slate-400 text-sm">
                  Dental & Aesthetic Clinic
                </p>

              </div>

            </div>

            <p className="mt-6 text-slate-300 leading-8">
              We provide high-quality dental care using modern
              technology and personalized treatment to help every
              patient achieve a healthy and confident smile.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "About",
                "Services",
                "Doctors",
                "Gallery",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition"
                  >

                    <FaArrowRight className="text-sm" />

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>General Dentistry</li>

              <li>Dental Implants</li>

              <li>Teeth Whitening</li>

              <li>Root Canal Treatment</li>

              <li>Dental Veneers</li>

              <li>Orthodontics</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-sky-500 mt-1" />

                <div>

                  <p className="text-slate-300">
                    +92 300 0000000
                  </p>

                  <p className="text-slate-400 text-sm">
                    Call Anytime
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-sky-500 mt-1" />

                <div>

                  <p className="text-slate-300">
                    info@dentalelites.com
                  </p>

                  <p className="text-slate-400 text-sm">
                    Email Support
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-sky-500 mt-1" />

                <div>

                  <p className="text-slate-300">
                    Main City Road,
                  </p>

                  <p className="text-slate-300">
                    Pakistan
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaClock className="text-sky-500 mt-1" />

                <div>

                  <p className="text-slate-300">
                    Mon - Sat
                  </p>

                  <p className="text-slate-400">
                    9:00 AM - 8:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Dental Elites.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-400 text-sm">

            <Link to="/">
              Privacy Policy
            </Link>

            <Link to="/">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;