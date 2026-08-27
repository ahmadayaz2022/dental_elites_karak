// import { useState } from 'react'
// import SmileArc from './SmileArc.jsx'
// import useReveal from '../hooks/useReveal.js'
// import { whatsappAppointmentLink } from '../siteConfig.js'
// import './Appointment.css'

// const SERVICE_OPTIONS = [
//   'Dental Checkup',
//   'Teeth Cleaning',
//   'Teeth Whitening',
//   'Dental Veneers',
//   'Root Canal Treatment',
//   'Smile Makeover',
//   'Facial Aesthetic Treatment',
//   'Other / Not Sure',
// ]

// const initialForm = {
//   name: '',
//   phone: '',
//   email: '',
//   service: '',
//   date: '',
//   time: '',
//   message: '',
// }

// export default function Appointment() {
//   const ref = useReveal()
//   const [form, setForm] = useState(initialForm)
//   const [errors, setErrors] = useState({})
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setForm((f) => ({ ...f, [name]: value }))
//   }

//   const validate = () => {
//     const newErrors = {}
//     if (!form.name.trim()) newErrors.name = 'Please enter your full name.'
//     if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number.'
//     else if (!/^[\d+\s-]{7,}$/.test(form.phone.trim())) newErrors.phone = 'Please enter a valid phone number.'
//     if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
//       newErrors.email = 'Please enter a valid email address.'
//     }
//     if (!form.service) newErrors.service = 'Please select a service.'
//     if (!form.date) newErrors.date = 'Please choose a preferred date.'
//     return newErrors
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const newErrors = validate()
//     setErrors(newErrors)
//     if (Object.keys(newErrors).length === 0) {
//       // Frontend-only for now — see README for connecting this to a backend.
//       setSubmitted(true)
//       setForm(initialForm)
//     }
//   }

//   const whatsappMessage = `Hello Dental Elites Aesthetic Center, I would like to book an appointment.\nName: ${form.name || '-'}\nService: ${form.service || '-'}\nPreferred date: ${form.date || '-'}`

//   return (
//     <section id="appointment" className="appointment" ref={ref}>
//       <div className="container appointment__inner">
//         <div className="appointment__intro reveal">
//           <span className="section-eyebrow">Book a Visit</span>
//           <h2 className="section-heading">Request Your Appointment</h2>
//           <SmileArc />
//           <p className="section-sub">
//             Fill in the form and our team will get back to you to confirm your
//             appointment, or reach us directly on WhatsApp for a faster response.
//           </p>

//           <a
//             href={whatsappAppointmentLink(whatsappMessage)}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-whatsapp appointment__whatsapp"
//           >
//             <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//               <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.82.83-3-.2-.32A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.24-.12-1.44-.7-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.31-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.6 4.15 3.65.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
//             </svg>
//             Book via WhatsApp
//           </a>
//         </div>

//         <form className="appointment__form reveal reveal-delay-2" onSubmit={handleSubmit} noValidate>
//           {submitted && (
//             <div className="appointment__success" role="status">
//               Thank you — your appointment request has been received. We'll
//               contact you shortly to confirm.
//             </div>
//           )}

//           <div className="form-grid">
//             <div className="form-field">
//               <label htmlFor="name">Full Name *</label>
//               <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" />
//               {errors.name && <span className="form-error">{errors.name}</span>}
//             </div>

//             <div className="form-field">
//               <label htmlFor="phone">Phone Number *</label>
//               <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="03XX XXXXXXX" />
//               {errors.phone && <span className="form-error">{errors.phone}</span>}
//             </div>

//             <div className="form-field">
//               <label htmlFor="email">Email</label>
//               <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
//               {errors.email && <span className="form-error">{errors.email}</span>}
//             </div>

//             <div className="form-field">
//               <label htmlFor="service">Select Service *</label>
//               <select id="service" name="service" value={form.service} onChange={handleChange}>
//                 <option value="">Choose a service</option>
//                 {SERVICE_OPTIONS.map((s) => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//               {errors.service && <span className="form-error">{errors.service}</span>}
//             </div>

//             <div className="form-field">
//               <label htmlFor="date">Preferred Date *</label>
//               <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
//               {errors.date && <span className="form-error">{errors.date}</span>}
//             </div>

//             <div className="form-field">
//               <label htmlFor="time">Preferred Time</label>
//               <input id="time" name="time" type="time" value={form.time} onChange={handleChange} />
//             </div>

//             <div className="form-field form-field--full">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell us a little about what you need"></textarea>
//             </div>
//           </div>

//           <button type="submit" className="btn btn-primary appointment__submit">
//             Request Appointment
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }


import { useState } from 'react'
import SmileArc from './SmileArc.jsx'
import useReveal from '../hooks/useReveal.js'
import { whatsappAppointmentLink } from '../siteConfig.js'
import './Appointment.css'

const SERVICE_OPTIONS = [
  'Dental Checkup',
  'Teeth Cleaning',
  'Teeth Whitening',
  'Dental Veneers',
  'Root Canal Treatment',
  'Smile Makeover',
  'Facial Aesthetic Treatment',
  'Other / Not Sure',
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

export default function Appointment() {
  const ref = useReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((f) => ({
      ...f,
      [name]: value,
    }))

    // Remove error when user starts correcting the field
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your full name.'
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.'
    } else if (!/^[\d+\s-]{7,}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!form.service) {
      newErrors.service = 'Please select a service.'
    }

    if (!form.date) {
      newErrors.date = 'Please choose a preferred date.'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length !== 0) {
      return
    }

    const whatsappMessage = `Hello Dental Elites Aesthetic Center,

I would like to book an appointment.

Patient Details:
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || 'Not provided'}

Appointment Details:
Service: ${form.service}
Preferred Date: ${form.date}
Preferred Time: ${form.time || 'Not specified'}

Message:
${form.message || 'No additional message.'}`

    const whatsappUrl = whatsappAppointmentLink(whatsappMessage)

    window.open(whatsappUrl, '_blank')

    setForm(initialForm)
    setErrors({})
  }

  return (
    <section id="appointment" className="appointment" ref={ref}>
      <div className="container appointment__inner">

        <div className="appointment__intro reveal">
          <span className="section-eyebrow">
            Book a Visit
          </span>

          <h2 className="section-heading">
            Request Your Appointment
          </h2>

          <SmileArc />

          <p className="section-sub">
            Fill in the form and send your appointment request directly
            to our WhatsApp. Our team will contact you to confirm your
            appointment.
          </p>

          <a
            href={whatsappAppointmentLink(
              'Hello Dental Elites Aesthetic Center, I would like to book an appointment.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp appointment__whatsapp"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
            >
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.82.83-3-.2-.32A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.24-.12-1.44-.7-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.31-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.6 4.15 3.65.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
            </svg>

            Book via WhatsApp
          </a>
        </div>

        <form
          className="appointment__form reveal reveal-delay-2"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-grid">

            <div className="form-field">
              <label htmlFor="name">
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />

              {errors.name && (
                <span className="form-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="phone">
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="03XX XXXXXXX"
              />

              {errors.phone && (
                <span className="form-error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />

              {errors.email && (
                <span className="form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="service">
                Select Service *
              </label>

              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">
                  Choose a service
                </option>

                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              {errors.service && (
                <span className="form-error">
                  {errors.service}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="date">
                Preferred Date *
              </label>

              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
              />

              {errors.date && (
                <span className="form-error">
                  {errors.date}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="time">
                Preferred Time
              </label>

              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
              />
            </div>

            <div className="form-field form-field--full">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a little about what you need"
              />
            </div>

          </div>

          <button
            type="submit"
            className="btn btn-primary appointment__submit"
          >
            Request Appointment
          </button>
        </form>

      </div>
    </section>
  )
}