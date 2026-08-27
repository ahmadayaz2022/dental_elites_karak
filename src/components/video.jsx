import './video.css'

export default function Video() {
  return (
    <section className="video-section" id="video">
      <div className="container">

        <div className="section-heading-wrap">
          <span className="section-eyebrow">Our Clinic</span>

          <h2 className="section-heading center">
            Experience Dental Elites Aesthetic Center
          </h2>
        </div>

        <div className="video-content">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/zggW78Z1NKU"
              title="Dental Elites Aesthetic Center"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-info">
            <h3>Modern Care. Beautiful Smiles.</h3>

            <p>
              Discover our dental and aesthetic services designed to provide
              professional care, comfort, and beautiful results.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
