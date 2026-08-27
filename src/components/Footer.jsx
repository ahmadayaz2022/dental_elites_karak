import { siteConfig } from '../siteConfig.js'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#dental-services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  { label: 'Dental Care', href: '#dental-services' },
  { label: 'Cosmetic Dentistry', href: '#dental-services' },
  { label: 'Smile Enhancement', href: '#dental-services' },
  { label: 'Aesthetic Services', href: '#aesthetic-services' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">DE</span>
            <div>
              <strong>Dental Elites</strong>
              <small>Aesthetic Center</small>
            </div>
          </div>
          <p>Modern dental and aesthetic care focused on your comfort, confidence and smile.</p>
          <div className="footer__socials">
            <a href={siteConfig.socials.facebook} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.5-3h-3V8.4c0-.87.24-1.46 1.49-1.46H16.6V4.34C16.3 4.3 15.29 4.2 14.12 4.2c-2.44 0-4.12 1.49-4.12 4.22V10.5H7.5v3H10V21h3.5z"/></svg>
            </a>
            <a href={siteConfig.socials.instagram} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4.1.06 1 .05 1.6.2 2 .34.5.2.9.4 1.3.8.4.4.6.8.8 1.3.14.4.29 1 .34 2 .06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1-.2 1.6-.34 2-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.14-1 .29-2 .34-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.2-2-.34-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.14-.4-.29-1-.34-2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1 .2-1.6.34-2 .2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.14 1-.29 2-.34C7.7 2.2 8 2.2 12 2.2zM12 0C9.2 0 8.9 0 7.7.06c-1.2.06-2 .24-2.7.5-.75.29-1.4.68-2 1.3-.6.6-1 1.28-1.3 2C1.4 4.6 1.2 5.4 1.16 6.6 1.1 7.8 1.1 8.16 1.1 12s0 4.2.06 5.4c.06 1.2.24 2 .5 2.7.29.75.68 1.4 1.3 2 .6.6 1.28 1 2 1.3.7.26 1.5.44 2.7.5C8.9 24 9.2 24 12 24s3.1 0 4.3-.06c1.2-.06 2-.24 2.7-.5.75-.29 1.4-.68 2-1.3.6-.6 1-1.28 1.3-2 .26-.7.44-1.5.5-2.7.06-1.2.06-1.5.06-5.4s0-4.2-.06-5.4c-.06-1.2-.24-2-.5-2.7-.29-.75-.68-1.4-1.3-2-.6-.6-1.28-1-2-1.3-.7-.26-1.5-.44-2.7-.5C15.1 0 14.8 0 12 0z"/><path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 5.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
            <a href={siteConfig.socials.whatsapp} aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/></svg>
            </a>

           <a href={siteConfig.socials.tiktok} aria-label="tiktok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h5>Quick Links</h5>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Services</h5>
          <ul>
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Contact</h5>
          <ul className="footer__contact">
            <li>{siteConfig.phoneDisplay}</li>
            <li>{siteConfig.address.line2}, {siteConfig.address.line3}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Dental Elites Aesthetic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
