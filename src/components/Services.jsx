import { useState } from 'react'
import SmileArc from './SmileArc.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import useReveal from '../hooks/useReveal.js'
import {
  dentalCategories,
  aestheticCategories,
} from '../data/services.js'
import './Services.css'


function ServiceCard({ service, icon, index }) {
  return (
    <article
      className={`service-card reveal reveal-delay-${(index % 4) + 1}`}
    >
      <div className="service-card__icon">
        <ServiceIcon name={icon} />
      </div>

      <h4>{service.name}</h4>

      <p>{service.description}</p>

      <a
        href="#appointment"
        className="service-card__link"
        aria-label={`Book ${service.name}`}
      >
        Book This Service

        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  )
}


function ServiceCategoryGroup({
  categories,
  tabLabel,
}) {
  const [activeId, setActiveId] = useState(
    categories[0]?.id || ''
  )

  const current =
    categories.find((category) => category.id === activeId) ||
    categories[0]

  if (!current) {
    return null
  }

  return (
    <>
      {/* Category Tabs */}
      <div
        className={`services__tabs reveal ${
          categories.length > 3
            ? 'services__tabs--wrap'
            : ''
        }`}
        role="tablist"
        aria-label={tabLabel}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeId === category.id}
            className={`services__tab ${
              activeId === category.id
                ? 'is-active'
                : ''
            }`}
            onClick={() => setActiveId(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Category Description */}
      <p className="services__tab-desc reveal">
        {current.description}
      </p>

      {/* Services */}
      <div className="services__grid">
        {current.services.map((service, index) => (
          <ServiceCard
            key={service.name}
            service={service}
            icon={current.icon}
            index={index}
          />
        ))}
      </div>
    </>
  )
}


export default function Services() {
  const dentalRef = useReveal()
  const aestheticRef = useReveal()

  return (
    <>
      {/* ==================================================
          DENTAL SERVICES
      ================================================== */}

      <section
        id="dental-services"
        className="services services--dental"
        ref={dentalRef}
      >
        <div className="container">

          <div className="section-head-row">

            <div>
              <span className="section-eyebrow reveal">
                Dental Care &amp; Treatment
              </span>

              <h2 className="section-heading reveal reveal-delay-1">
                Comprehensive Dental Services
              </h2>

              <SmileArc className="reveal reveal-delay-1" />
            </div>

            <p className="section-sub reveal reveal-delay-2">
              From routine dental care to cosmetic and restorative
              treatments, our professional dental services are designed
              to protect your oral health and help you achieve a confident,
              healthy smile.
            </p>

          </div>

          <ServiceCategoryGroup
            categories={dentalCategories}
            tabLabel="Dental service categories"
          />

        </div>
      </section>


      {/* ==================================================
          AESTHETIC SERVICES
      ================================================== */}

      <section
        id="aesthetic-services"
        className="services services--aesthetic"
        ref={aestheticRef}
      >
        <div className="container">

          <div className="section-head-row">

            <div>
              <span className="section-eyebrow reveal">
                Aesthetic Care
              </span>

              <h2 className="section-heading reveal reveal-delay-1">
                Aesthetic Services
              </h2>

              <SmileArc className="reveal reveal-delay-1" />
            </div>

            <p className="section-sub reveal reveal-delay-2">
              Discover personalized aesthetic treatments including
              laser, skincare, rejuvenation, and non-surgical options,
              delivered with care and a focus on natural-looking results.
            </p>

          </div>

          <ServiceCategoryGroup
            categories={aestheticCategories}
            tabLabel="Aesthetic service categories"
          />

        </div>
      </section>
    </>
  )
}