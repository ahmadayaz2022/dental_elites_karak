import SmileArc from './SmileArc.jsx'
import { whatsappAppointmentLink } from '../siteConfig.js'
import './Hero.css'

const TRUST_ITEMS = [
  { label: 'Professional Care' },
  { label: 'Modern Treatment' },
  { label: 'Patient Comfort' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill-tag hero__eyebrow">
            <SmileArc className="hero__eyebrow-arc" />
            Dental &amp; Aesthetic Center, in Amberi kalla Karak kpk.
          </span>

          <h1 className="hero__heading">
            Your Smile. Your Confidence. <span>Our Expertise.</span>
          </h1>

          <p className="hero__sub">
            Experience modern dental care and advanced aesthetic treatments in a
            comfortable, professional environment.
          </p>

          <div className="hero__actions">
            <a href="#appointment" className="btn btn-primary">
              Book an Appointment
            </a>
            <a href="#dental-services" className="btn btn-outline">
              Explore Our Services
            </a>
          </div>

          <ul className="hero__trust">
            {TRUST_ITEMS.map((item) => (
              <li key={item.label}>
                <span className="hero__trust-dot" aria-hidden="true"></span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQyhBvoss031LlyTSInWaVsRmmXxM7gKuf2dyjZnBZs6PiBcGq9jhQHA&s=10"
              alt="Dentist providing modern dental care to a patient in a clean clinical environment"
              loading="eager"
            />
          </div>
          <div className="hero__badge">
            <strong>Modern</strong>
            <span>Dental Technology</span>
          </div>
          <SmileArc className="hero__arc-deco" />
        </div>
      </div>
    </section>
  )
}
