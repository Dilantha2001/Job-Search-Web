import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#0d0c1d] via-[#151734] to-[#0e1326]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,40,217,0.14),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.14),transparent_20%)]" />
      <div className="relative w-full max-w-3xl px-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl shadow-black/20 p-10 md:p-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-4">
            Error
          </p>
          <h1 className="text-7xl md:text-8xl font-extrabold text-white font-clashDisplay drop-shadow-sm">
            404
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
            Looks like you&apos;re off the map
          </h2>
          <p className="mt-3 text-lg text-white/70 max-w-2xl mx-auto">
            The page you&apos;re searching for has moved or never existed. Let&apos;s
            get you back to the roles and companies that matter.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mt-10 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primaryColor px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primaryColor/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primaryColor/40"
            >
              Back to home
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-white/40 hover:text-white hover:-translate-y-0.5"
            >
              Browse jobs
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-white/70 transition hover:border-white/30 hover:text-white hover:-translate-y-0.5"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
