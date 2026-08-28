import { useEffect, useState } from 'react'
import { siteConfig, whatsappAppointmentLink } from '../siteConfig.js'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Dental Services', href: '#dental-services' },
  { label: 'Aesthetic Services', href: '#aesthetic-services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleNavClick}>
          <span className="navbar__logo-mark">DE</span>
          <span className="navbar__logo-text">
            <strong>Dental Elites</strong>
            {/* <small>Aesthetic Center</small> */}
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="navbar__cta">
          <a href="#appointment" className="btn btn-gold navbar__book-btn">
            Book an Appointment
          </a>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick}>{link.label}</a>
          ))}
        </nav>
        <div className="navbar__mobile-cta">
          <a href="#appointment" className="btn btn-gold" onClick={handleNavClick}>
            Book an Appointment
          </a>
          <a
            href={whatsappAppointmentLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            onClick={handleNavClick}
          >
            Book via WhatsApp
          </a>
        </div>
        <p className="navbar__mobile-phone">{siteConfig.phoneDisplay}</p>
      </div>
    </header>
  )
}
