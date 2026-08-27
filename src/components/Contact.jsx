import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import { siteConfig, whatsappAppointmentLink } from '../siteConfig.js'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="section-heading-wrap">
          <span className="section-eyebrow reveal">Get In Touch</span>
          <h2 className="section-heading center reveal reveal-delay-1">Visit or Contact Us</h2>
          <SmileArc className="center reveal reveal-delay-1" />
        </div>

        <div className="contact__grid">
          <div className="contact__card reveal reveal-delay-1">
            <div className="contact__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10.5" r="2.4"/></svg>
            </div>
            <h4>{siteConfig.clinicName}</h4>
            <p>{siteConfig.address.line1}<br />{siteConfig.address.line2}<br />{siteConfig.address.line3}</p>
          </div>

          <div className="contact__card reveal reveal-delay-2">
            <div className="contact__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.3z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h4>Call or WhatsApp</h4>
            <p>{siteConfig.phoneDisplay}</p>
            <div className="contact__card-actions">
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-outline">Call Now</a>
              <a href={whatsappAppointmentLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">WhatsApp</a>
            </div>
          </div>

          <div className="contact__card reveal reveal-delay-3">
            <div className="contact__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h4>Clinic Hours</h4>
            <p>{siteConfig.hoursNote}</p>
          </div>
        </div>

        {/* <div className="contact__map reveal reveal-delay-2">
          <div className="contact__map-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10.5" r="2.4"/></svg>
            <p>Google Maps embed placeholder — replace with an embedded map for Amberi Kala, Karak, KPK.</p>
          </div>
        </div> */}


<div className="contact__map reveal reveal-delay-2">
  <a
    href="https://maps.app.goo.gl/B5XiHrrSm3FuiZoR8"
    target="_blank"
    rel="noopener noreferrer"
    className="contact__map-link"
  >
    <div className="contact__map-placeholder">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="2.4" />
      </svg>

      <p>View Dental Elites Aesthetic Center on Google Maps</p>
      <span>Open Location →</span>
    </div>
  </a>
</div>

      </div>
    </section>
  )
}
