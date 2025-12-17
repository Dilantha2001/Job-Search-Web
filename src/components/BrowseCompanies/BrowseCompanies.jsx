import { useMemo, useState } from "react";
import { companiesList } from "../../Data/Data.js";
import { GoSearch } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const industries = ["All", ...new Set(companiesList.map((c) => c.industry))];

const BrowseCompanies = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");

  const filteredCompanies = useMemo(() => {
    return companiesList.filter((company) => {
      const matchesSearch =
        search.trim().length === 0 ||
        company.name.toLowerCase().includes(search.toLowerCase()) ||
        company.tagline.toLowerCase().includes(search.toLowerCase());
      const matchesIndustry = industry === "All" || company.industry === industry;
      return matchesSearch && matchesIndustry;
    });
  }, [industry, search]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b0f1f] via-[#0a1129] to-[#080c1a] text-white">
      <div className="container py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.3),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.25),transparent_25%)]" />
          <div className="relative grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-3">
                Browse companies
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-clashDisplay leading-tight">
                Explore employers hiring in Sri Lanka
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                Filter by industry and discover current openings, HQ locations, and culture
                highlights from top employers.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                  <GoSearch className="text-xl text-white/60" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by company name or tagline"
                    className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                  <HiOutlineBuildingOffice2 className="text-xl text-white/60" />
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                  >
                    {industries.map((item) => (
                      <option key={item} value={item} className="text-slate-900">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur shadow-lg shadow-black/30">
              <p className="text-sm text-white/70">What candidates look for</p>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li>• Open roles with clear work modes</li>
                <li>• Locations across Colombo, Kandy, Jaffna, and beyond</li>
                <li>• Culture cues and mission fit</li>
                <li>• Links to apply directly</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-1">Directory</p>
              <h2 className="text-2xl font-semibold">Companies hiring now</h2>
            </div>
            <p className="text-white/60 text-sm">
              {filteredCompanies.length} compan{filteredCompanies.length === 1 ? "y" : "ies"} match
              your filters
            </p>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCompanies.map((company) => (
              <article
                key={company.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primaryColor/40 hover:shadow-2xl hover:shadow-primaryColor/20"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/60">{company.industry}</p>
                    <h3 className="mt-1 text-lg font-semibold">{company.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <SlLocationPin />
                        {company.hq}
                      </span>
                      <span>{company.employees}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70 line-clamp-2">{company.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {company.locations.map((loc) => (
                    <span
                      key={`${company.id}-${loc}`}
                      className="rounded-full bg-white/10 px-3 py-1 border border-white/10"
                    >
                      {loc}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-sm text-white/70">
                    <p className="font-semibold text-white">
                      {company.openings} open role{company.openings === 1 ? "" : "s"}
                    </p>
                    <p className="text-xs">Hiring across Sri Lanka</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-primaryColor transition hover:text-primaryColor/80"
                    >
                      Visit site →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCompanies;

