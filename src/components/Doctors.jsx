import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import { team } from '../data/team.js'
import './Doctors.css'

export default function Doctors() {
  const ref = useReveal()

  return (
    <section id="doctors" className="doctors" ref={ref}>
      <div className="container">
        <div className="section-heading-wrap">
          <span className="section-eyebrow reveal">Our Team</span>
          <h2 className="section-heading center reveal reveal-delay-1">Meet Our Professionals</h2>
          <SmileArc className="center reveal reveal-delay-1" />
          <p className="section-sub center reveal reveal-delay-2">
            A dedicated team focused on delivering attentive, professional care.
          </p>
        </div>

        <div className="doctors__grid">
          {team.map((member, i) => (
            <div key={member.name} className={`doctor-card reveal reveal-delay-${i + 1}`}>
              <div className="doctor-card__photo">
                <img src={member.image} alt={`${member.name}, ${member.role} at Dental Elites Aesthetic Center`} />
              </div>
              <div className="doctor-card__body">
                <h4>{member.name}</h4>
                <span className="doctor-card__role">{member.role}</span>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
