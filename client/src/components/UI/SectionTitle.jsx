function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
}) {
  return (
    <div className={center ? "text-center mb-16" : "mb-16"}>
      <p className="section-subtitle">
        {subtitle}
      </p>

      <h2 className="section-title mt-4">
        {title}
      </h2>

      {description && (
        <p className="section-description mt-5">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;