import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import './WhyChooseUs.css'

const FEATURES = [
  {
    title: 'Professional & Personalized Care',
    description: 'Every treatment plan is built around your individual needs and goals.',
    icon: 'M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z',
  },
  {
    title: 'Modern Treatment Approach',
    description: 'We keep our techniques and equipment current with modern dental practice.',
    icon: 'M4 4h16v12H5.2L4 17.2V4z',
  },
  {
    title: 'Comfortable Environment',
    description: 'A calm, clean space designed to put patients at ease from the first visit.',
    icon: 'M4 20V10l8-6 8 6v10h-5v-6H9v6H4z',
  },
  {
    title: 'Patient-Centered Service',
    description: 'Your questions and comfort come first, at every stage of treatment.',
    icon: 'M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z',
  },
  {
    title: 'Quality & Safety',
    description: 'Careful attention to hygiene and safety standards throughout your visit.',
    icon: 'M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z',
  },
  {
    title: 'Comprehensive Dental & Aesthetic Care',
    description: 'Dental and aesthetic services together, under one experienced team.',
    icon: 'M12 3c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3v5l3 3',
  },
]

export default function WhyChooseUs() {
  const ref = useReveal()

  return (
    <section id="why-us" className="why" ref={ref}>
      <div className="container">
        <div className="section-heading-wrap">
          <span className="section-eyebrow reveal">Why Dental Elites</span>
          <h2 className="section-heading center reveal reveal-delay-1">Why Choose Dental Elites?</h2>
          <SmileArc className="center reveal reveal-delay-1" />
        </div>

        <div className="why__grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`why__card reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="why__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h4>{f.title}</h4>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
