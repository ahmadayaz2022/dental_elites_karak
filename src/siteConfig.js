/**
 * siteConfig.js
 * ---------------------------------------------------------
 * Central place for all clinic information used across the
 * site. Edit the values here to update the whole website —
 * you should not need to touch individual components for
 * basic info changes (name, phone, address, etc).
 * ---------------------------------------------------------
 */

export const siteConfig = {
  clinicName: 'Dental Elites Aesthetic Center',
  shortName: 'Dental Elites',
  tagline: 'Your Smile. Your Confidence. Our Expertise.',

  phoneDisplay: '+92 334 9660171',
  phoneRaw: '+923349660171', // digits only, no spaces, used for tel: and wa.me links

  address: {
    line1: 'Above Bank Al Habib Ltd',
    line2: 'Amberi Kala',
    line3: 'Karak, KPK, Pakistan',
    full: 'Above Bank Al Habib Ltd, Amberi Kala, Karak, KPK, Pakistan',
  },

  hoursNote: '24 Hours Service Available. Call on +92 334 9660171 or WhatsApp for Appointments.',

  socials: {
    facebook: 'https://www.tiktok.com/@dental_elites?_r=1&_t=ZS-989rOk8WIVB',
    Tiktok: 'https://www.tiktok.com/@dental_elites?_r=1&_t=ZS-989rOk8WIVB',
    instagram: 'https://www.instagram.com/dental_elites_?igsh=c2ZuNjNvdDMyYW1z',
    whatsapp: 'https://wa.me/923349660171',
  },
}

export const whatsappAppointmentLink = (details = '') => {
  const base = `https://wa.me/923349660171`
  const message = details
    ? details
    : `Hello Dental Elites Aesthetic Center, I would like to book an appointment.`
  return `${base}?text=${encodeURIComponent(message)}`
}
