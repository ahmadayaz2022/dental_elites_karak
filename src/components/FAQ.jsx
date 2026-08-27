import { useState } from 'react'
import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import { siteConfig } from '../siteConfig.js'
import './FAQ.css'

const FAQS = [
  {
    q: 'How can I book an appointment?',
    a: `You can book an appointment by calling or messaging us on WhatsApp at ${siteConfig.phoneDisplay}, or by filling out the appointment form on this website.`,
  },
  {
    q: 'What dental services do you provide?',
    a: 'We provide general dental care such as checkups, cleaning, fillings, root canal treatment, extractions and gum care, along with cosmetic and smile enhancement treatments.',
  },
  {
    q: 'Do you provide cosmetic dentistry?',
    a: 'Yes. Our cosmetic dentistry services include teeth whitening, veneers, crowns, tooth reshaping and other cosmetic restorations.',
  },
  {
    q: 'What aesthetic services are available?',
    a: 'We offer non-surgical aesthetic services including facial aesthetic treatments, skin rejuvenation, facial care and a personalized aesthetic consultation.',
  },
  {
    q: 'How should I prepare for my dental consultation?',
    a: 'Simply arrive a few minutes early and bring any relevant dental records if you have them. Our team will guide you through the rest during your visit.',
  },
  {
    q: 'Where is Dental Elites Aesthetic Center located?',
    a: `We're located ${siteConfig.address.full}.`,
  },
]

export default function FAQ() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq" ref={ref}>
      <div className="container faq__inner">
        <div className="faq__intro">
          <span className="section-eyebrow reveal">FAQ</span>
          <h2 className="section-heading reveal reveal-delay-1">Frequently Asked Questions</h2>
          <SmileArc className="reveal reveal-delay-1" />
          <p className="section-sub reveal reveal-delay-2">
            Can't find what you're looking for? Reach out to us directly and
            we'll be happy to help.
          </p>
          <a href="#contact" className="btn btn-outline reveal reveal-delay-3">Contact Us</a>
        </div>

        <div className="faq__list reveal reveal-delay-2">
          {FAQS.map((item, i) => (
            <div key={item.q} className={`faq__item ${openIndex === i ? 'is-open' : ''}`}>
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <span className="faq__icon" aria-hidden="true">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq__answer" style={{ maxHeight: openIndex === i ? '240px' : '0px' }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
