import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import './Process.css'

const STEPS = [
  {
    step: '01',
    title: 'Book Your Appointment',
    description: 'Reach out by phone, WhatsApp or our online form to schedule a visit.',
  },
  {
    step: '02',
    title: 'Consultation & Assessment',
    description: 'We listen to your concerns and carry out a thorough assessment.',
  },
  {
    step: '03',
    title: 'Personalized Treatment Plan',
    description: 'A treatment plan is prepared around your specific needs and goals.',
  },
  {
    step: '04',
    title: 'Professional Treatment & Follow-Up',
    description: 'Treatment is carried out with care, followed by ongoing support.',
  },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="process" className="process" ref={ref}>
      <div className="container">
        <div className="section-heading-wrap">
          <span className="section-eyebrow reveal">How It Works</span>
          <h2 className="section-heading center reveal reveal-delay-1">Your Dental Treatment Journey</h2>
          <SmileArc className="center reveal reveal-delay-1" />
        </div>

        <div className="process__track">
          {STEPS.map((s, i) => (
            <div key={s.step} className={`process__step reveal reveal-delay-${i + 1}`}>
              <div className="process__number">{s.step}</div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
              {i < STEPS.length - 1 && <span className="process__connector" aria-hidden="true"></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
