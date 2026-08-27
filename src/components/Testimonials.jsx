import { useState } from 'react'
import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Israr khattak',
    rating: 5,
    review: 'Sample review: The staff explained everything clearly and made me feel comfortable throughout my visit. Very professional environment.',
  },
  {
    name: 'M.umair khattak',
    rating: 5,
    review: 'Sample review: I appreciated how personalized my treatment plan felt. The clinic itself is clean and modern.',
  },
  {
    name: 'Ayesha Ktk',
    rating: 4,
    review: 'Sample review: Friendly team and a calm atmosphere. My appointment started on time and everything was well explained.',
  },
  {
    name: 'Hassan wazir',
    rating: 5,
    review: 'Sample review: Good experience overall — attentive care and a clean, well-organized clinic.',
  },
]

function Stars({ count }) {
  return (
    <div className="testimonial__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < count ? '#B4915B' : 'none'} stroke="#B4915B" strokeWidth="1.2">
          <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.7l-5.2 2.8 1-5.8L1.5 7.6l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useReveal()
  const [index, setIndex] = useState(0)

  const go = (dir) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <div className="section-heading-wrap">
          <span className="section-eyebrow reveal">Patient Stories</span>
          <h2 className="section-heading center reveal reveal-delay-1">What Our Patients Say</h2>
          <SmileArc className="center reveal reveal-delay-1" />
          <p className="section-sub center reveal reveal-delay-2">
            Sample testimonials shared here to illustrate the kind of feedback we value.
          </p>
        </div>

        <div className="testimonials__carousel reveal reveal-delay-2">
          <button className="testimonials__nav" onClick={() => go(-1)} aria-label="Previous testimonial">
            <svg viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div className="testimonial-card">
            <Stars count={TESTIMONIALS[index].rating} />
            <p className="testimonial-card__quote">"{TESTIMONIALS[index].review}"</p>
            <span className="testimonial-card__name">{TESTIMONIALS[index].name}</span>
          </div>

          <button className="testimonials__nav" onClick={() => go(1)} aria-label="Next testimonial">
            <svg viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              className={`testimonials__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
