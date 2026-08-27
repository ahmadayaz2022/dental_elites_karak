/**
 * SmileArc — the site's signature visual motif.
 * A thin, gently curved gold line echoing the arc of a smile.
 * Used under headings, in the hero, and as a section divider
 * throughout the site instead of generic numbered badges or
 * gradient blobs.
 */
export default function SmileArc({ className = '', flip = false }) {
  return (
    <svg
      className={`smile-arc ${className}`}
      viewBox="0 0 88 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M2 3C14 15 30 17 44 17C58 17 74 15 86 3"
        stroke="#B4915B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
