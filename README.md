# Dental Elites Aesthetic Center — Website

A modern, responsive React frontend for Dental Elites Aesthetic Center
(Karak, KPK, Pakistan), built with React 18, JavaScript (ES6+), and
React Router — no TypeScript, no UI component libraries.

## 1. Project Structure

```
dental-elites/
├── index.html                 # Page shell, SEO meta tags, fonts
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                # App entry point
│   ├── App.jsx                 # Router + layout (Navbar/Footer/WhatsApp button)
│   ├── index.css               # Design tokens, resets, shared utility classes
│   ├── siteConfig.js           # Clinic name, phone, address — edit here
│   ├── data/
│   │   ├── services.js         # All dental + aesthetic service content
│   │   └── team.js             # Doctors / team members
│   ├── hooks/
│   │   └── useReveal.js        # Scroll-reveal animation hook
│   ├── components/
│   │   ├── SmileArc.jsx/.css   # Signature gold "smile arc" motif
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── About.jsx/.css
│   │   ├── Services.jsx/.css   # Renders #dental-services & #aesthetic-services
│   │   ├── ServiceIcon.jsx
│   │   ├── WhyChooseUs.jsx/.css
│   │   ├── Process.jsx/.css
│   │   ├── Doctors.jsx/.css
│   │   ├── Gallery.jsx/.css    # Includes lightbox modal
│   │   ├── Testimonials.jsx/.css
│   │   ├── FAQ.jsx/.css
│   │   ├── Appointment.jsx/.css # Booking form + WhatsApp button
│   │   ├── Contact.jsx/.css
│   │   ├── Footer.jsx/.css
│   │   └── WhatsAppFloat.jsx/.css
│   └── pages/
│       └── Home.jsx            # Assembles all sections
```

## 2. Installation

```bash
cd dental-elites
npm install
```

## 3. Run (development)

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## 4. Build for production

```bash
npm run build
npm run preview   # optional — preview the production build locally
```

The production-ready files will be in the `dist/` folder, ready to
deploy to any static host (Vercel, Netlify, cPanel, etc).

## 5. Where to Replace Images

All images currently use royalty-free Unsplash placeholder URLs so the
site looks complete out of the box. Replace them with real clinic
photos in these files:

- `src/components/Hero.jsx` — main hero image
- `src/components/About.jsx` — clinic interior image
- `src/data/team.js` — doctor/team photos
- `src/components/Gallery.jsx` — the `IMAGES` array (6 gallery photos)

To use local images instead of URLs: put files in `src/assets/`, then
`import heroImg from '../assets/hero.jpg'` and use `heroImg` as the
`src`.

## 6. How to Change Clinic Information

Almost everything (clinic name, phone number, WhatsApp number,
address, opening-hours note, social links) is centralized in:

```
src/siteConfig.js
```

Edit the values there and they update across the navbar, footer,
contact section, appointment section and the WhatsApp links
automatically.

Service and team content lives in:

- `src/data/services.js` — dental & aesthetic service catalogue, organized
  into categories (e.g. Laser Treatments, Skin Rejuvenation, Injectable &
  Non-Surgical, Consultation). Add a new service by adding an object to
  the relevant category's `services` array, or add a whole new category
  by adding an object to `dentalCategories` / `aestheticCategories` —
  the tabs and cards render automatically from this data.
- `src/data/team.js` — doctors / staff profiles

## 7. Connecting the Appointment Form to a Backend Later

The appointment form (`src/components/Appointment.jsx`) currently:
- Validates required fields on the frontend (name, phone, service, date)
- Shows a success message on valid submission
- Does **not** send data anywhere yet

To connect it to a real backend:

1. In `handleSubmit`, replace the `setSubmitted(true)` block with an
   API call, for example:
   ```js
   const response = await fetch('https://your-api.com/appointments', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(form),
   })
   if (response.ok) {
     setSubmitted(true)
     setForm(initialForm)
   } else {
     // handle/display an error state
   }
   ```
2. Add a loading state (e.g. `isSubmitting`) to disable the button
   while the request is in flight.
3. If you add an admin dashboard later, this same `form` shape
   (`name, phone, email, service, date, time, message`) can be reused
   as the payload contract between frontend and backend.

The WhatsApp button (`Book via WhatsApp`) uses `wa.me` deep links and
requires no backend — it works immediately.

## 8. Notes

- No unsupported medical claims are made anywhere in the copy;
  testimonials are clearly placeholder/sample content.
- Qualifications and years of experience were not invented for the
  team section — only names, roles and general descriptions are shown.
- The site respects `prefers-reduced-motion` and uses visible
  keyboard focus states throughout.
