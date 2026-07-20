import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="section-padding container-custom text-center">

      <h1 className="text-7xl font-bold text-sky-700">
        404
      </h1>

      <h2 className="mt-6">
        Page Not Found
      </h2>

      <p className="mt-4 text-slate-600">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="primary-btn mt-8 inline-flex"
      >
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;