import { useMemo, useState } from "react";
import { findJobListings } from "../../Data/Data.js";
import { GoSearch } from "react-icons/go";
import { IoFilter } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { generateSlug } from "../../utils/index.js";

const jobTypes = ["All", "Full-Time", "Part-Time", "Hybrid", "Remote"];

const FindJobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const locations = useMemo(() => {
    const list = ["All"];
    findJobListings.forEach((job) => {
      if (!list.includes(job.location)) {
        list.push(job.location);
      }
    });
    return list;
  }, []);

  const filteredJobs = useMemo(() => {
    return findJobListings.filter((job) => {
      const matchesSearch =
        search.trim().length === 0 ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase());
      const matchesLocation =
        location === "All" || job.location.toLowerCase() === location.toLowerCase();
      const matchesType =
        selectedType === "All" || job.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [location, search, selectedType]);

  return (
    <section className="min-h-screen bg-[#0b1021] text-white">
      <div className="container py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#11183a] via-[#151f4a] to-[#0d122b] border border-white/10 shadow-2xl shadow-black/30 p-8 md:p-12">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.4),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.35),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-3">
                Find jobs
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-clashDisplay leading-tight">
                Discover roles with Sri Lanka&apos;s leading employers
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                Search by title, company, location, or filter by work mode to land the role that
                fits how you want to work.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                  <GoSearch className="text-xl text-white/60" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by job title or company"
                    className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                  <IoFilter className="text-xl text-white/60" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc} className="text-slate-900">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                {jobTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      selectedType === type
                        ? "bg-primaryColor text-white shadow-lg shadow-primaryColor/30"
                        : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur shadow-lg shadow-black/30">
              <p className="text-sm text-white/70">Top hiring right now</p>
              <div className="mt-4 space-y-3">
                {findJobListings.slice(0, 3).map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 p-3"
                  >
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-10 w-10 rounded-lg bg-white/10 object-contain p-1"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{job.title}</p>
                      <p className="text-xs text-white/60">{job.company}</p>
                    </div>
                    <span className="text-xs text-white/60">{job.remote}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-1">
                Results
              </p>
              <h2 className="text-2xl font-semibold">Open roles</h2>
            </div>
            <p className="text-white/60 text-sm">
              {filteredJobs.length} role{filteredJobs.length === 1 ? "" : "s"} match your filters
            </p>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primaryColor/40 hover:shadow-2xl hover:shadow-primaryColor/20"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">{job.company}</p>
                    <h3 className="mt-1 text-lg font-semibold">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <SlLocationPin />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <IoMdTime />
                        {job.type} · {job.remote}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        LKR {job.salary.toLocaleString("en-LK")} / month
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <span
                      key={`${job.id}-${tag}`}
                      className="text-xs rounded-full bg-white/10 px-3 py-1 text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-white/60">{job.experience}</span>
                  <a
                    href={`mailto:careers@${generateSlug(job.company)}.com?subject=${encodeURIComponent(
                      job.title
                    )}`}
                    className="text-sm font-semibold text-primaryColor transition hover:text-primaryColor/80"
                  >
                    Apply now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobs;

