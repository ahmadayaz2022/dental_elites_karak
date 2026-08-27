// import { useEffect, useState } from 'react'
// import SmileArc from './SmileArc.jsx'
// import useReveal from '../hooks/useReveal.js'
// import './Gallery.css'

// const IMAGES = [
//   { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=700&auto=format&fit=crop', alt: 'Dental treatment chair in a modern clinic', category: 'Clinic' },
//   { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=700&auto=format&fit=crop', alt: 'Close-up of a healthy, bright smile', category: 'Smile' },
//   { src: 'https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=700&auto=format&fit=crop', alt: 'Dental instruments arranged for a procedure', category: 'Treatment' },
//   { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=700&auto=format&fit=crop', alt: 'Clean and modern clinic reception area', category: 'Clinic' },
//   { src: 'https://images.unsplash.com/photo-1595776613215-fe04b78de7ee?q=80&w=700&auto=format&fit=crop', alt: 'Patient consultation with a dental professional', category: 'Treatment' },
//   { src: 'https://images.unsplash.com/photo-1516069677018-378515003435?q=80&w=700&auto=format&fit=crop', alt: 'Aesthetic skincare treatment', category: 'Aesthetic' },
// ]

// export default function Gallery() {
//   const ref = useReveal()
//   const [active, setActive] = useState(null)

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === 'Escape') setActive(null)
//     }
//     window.addEventListener('keydown', onKey)
//     document.body.style.overflow = active !== null ? 'hidden' : ''
//     return () => {
//       window.removeEventListener('keydown', onKey)
//       document.body.style.overflow = ''
//     }
//   }, [active])

//   return (
//     <section id="gallery" className="gallery" ref={ref}>
//       <div className="container">
//         <div className="section-heading-wrap">
//           <span className="section-eyebrow reveal">Smile Gallery</span>
//           <h2 className="section-heading center reveal reveal-delay-1">A Glimpse Into Dental Elites</h2>
//           <SmileArc className="center reveal reveal-delay-1" />
//         </div>

//         <div className="gallery__grid">
//           {IMAGES.map((img, i) => (
//             <button
//               key={img.src}
//               className={`gallery__item reveal reveal-delay-${(i % 4) + 1}`}
//               onClick={() => setActive(i)}
//               aria-label={`View larger image: ${img.alt}`}
//             >
//               <img src={img.src} alt={img.alt} loading="lazy" />
//               <span className="gallery__tag">{img.category}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {active !== null && (
//         <div className="gallery__lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
//           <button className="gallery__close" aria-label="Close image">&times;</button>
//           <img
//             src={IMAGES[active].src.replace('w=700', 'w=1400')}
//             alt={IMAGES[active].alt}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   )
// }


import { useEffect, useState } from 'react'
import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import './Gallery.css'

import gallery1 from '../assets/gallery/gallery1.jpeg'
import gallery2 from '../assets/gallery/gallery2.jpeg'
import gallery3 from '../assets/gallery/gallery3.jpeg'
import gallery4 from '../assets/gallery/gallery4.jpeg'
import gallery5 from '../assets/gallery/gallery5.jpeg'
import gallery6 from '../assets/gallery/gallery6.jpeg'


const IMAGES = [
  {
    src: gallery1,
    alt: 'Dental treatment chair in a modern clinic',
    category: 'Clinic'
  },
  {
    src: gallery2,
    alt: 'Close-up of a healthy, bright smile',
    category: 'Smile'
  },
  {
    src: gallery3,
    alt: 'Dental instruments arranged for a procedure',
    category: 'Treatment'
  },
  {
    src: gallery4,
    alt: 'Clean and modern clinic reception area',
    category: 'Clinic'
  },
  {
    src: gallery5,
    alt: 'Patient consultation with a dental professional',
    category: 'Treatment'
  },
  {
    src: gallery6,
    alt: 'Aesthetic skincare treatment',
    category: 'Aesthetic'
  },
]

export default function Gallery() {
  const ref = useReveal()
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }

    window.addEventListener('keydown', onKey)

    document.body.style.overflow =
      active !== null ? 'hidden' : ''

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">

        <div className="section-heading-wrap">
          <span className="section-eyebrow reveal">
            Smile Gallery
          </span>

          <h2 className="section-heading center reveal reveal-delay-1">
            A Glimpse Into Dental Elites
          </h2>

          <SmileArc className="center reveal reveal-delay-1" />
        </div>

        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              className={`gallery__item reveal reveal-delay-${(i % 4) + 1}`}
              onClick={() => setActive(i)}
              aria-label={`View larger image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />

              <span className="gallery__tag">
                {img.category}
              </span>
            </button>
          ))}
        </div>

      </div>

      {active !== null && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            className="gallery__close"
            aria-label="Close image"
          >
            &times;
          </button>

          <img
            src={IMAGES[active].src}
            alt={IMAGES[active].alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}