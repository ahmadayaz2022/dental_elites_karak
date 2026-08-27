import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import './About.css'

const HIGHLIGHTS = [
  'Modern and comfortable clinical environment',
  'Professional, courteous dental care',
  'Personalized treatment plans for every patient',
  'Modern techniques and up-to-date equipment',
  'A strong focus on patient satisfaction',
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref}>
      <div className="container about__inner">
        <div className="about__visual reveal">
          <img
            src="src/assets/hero/about.avif"
            alt="Modern, clean interior of the Dental Elites Aesthetic Center clinic"
          />
          <div className="about__visual-card">
            <strong>Patient-Focused</strong>
            <span>Care built around comfort &amp; trust</span>
          </div>
        </div>

        <div className="about__copy">
          <span className="section-eyebrow reveal">About Us</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Welcome to Dental Elites Aesthetic Center
          </h2>
          <SmileArc className="reveal reveal-delay-1" />

          <p className="about__text reveal reveal-delay-2">
            Dental Elites Aesthetic Center provides modern dental and aesthetic
            care with a focus on patient comfort, safety, quality treatment and
            beautiful, natural-looking results. Our team takes the time to
            understand each patient's needs and builds a treatment plan around
            them — never the other way around.
          </p>

          <ul className="about__list reveal reveal-delay-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <span className="about__check" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 10.5L8 14.5L16 6" stroke="#B4915B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
