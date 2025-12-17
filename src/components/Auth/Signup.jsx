import { useState } from "react";
import { Link } from "react-router-dom";
import { GoLock, GoMail, GoPerson } from "react-icons/go";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit for static demo
    alert(`Welcome aboard, ${form.name || "candidate"}!`);
  };

  return (
    <section className="min-h-screen bg-[#F8F8FD] flex items-center">
      <div className="container flex justify-center py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-xl"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-textGrayColor mb-2 uppercase">
              Join us
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-textDarkColor">
              Create your JobHuntly account
            </h2>
            <p className="mt-2 text-sm text-textGrayColor">
              Save jobs, set alerts, and apply faster with a single profile tailored to Sri Lankan
              roles.
            </p>
          </div>

          <label className="block space-y-2">
            <span className="text-sm text-textGrayColor">Full name</span>
            <div className="flex items-center gap-3 rounded-2xl bg-[#F8F8FD] border border-gray-200 px-4 py-3 focus-within:border-primaryColor/60">
              <GoPerson className="text-xl text-textGrayColor" />
              <input
                type="text"
                required
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Your name"
                className="w-full bg-transparent text-textDarkColor placeholder:text-textGrayColor focus:outline-none"
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-textGrayColor">Email</span>
            <div className="flex items-center gap-3 rounded-2xl bg-[#F8F8FD] border border-gray-200 px-4 py-3 focus-within:border-primaryColor/60">
              <GoMail className="text-xl text-textGrayColor" />
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                placeholder="you@example.com"
                className="w-full bg-transparent text-textDarkColor placeholder:text-textGrayColor focus:outline-none"
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-textGrayColor">Password</span>
            <div className="flex items-center gap-3 rounded-2xl bg-[#F8F8FD] border border-gray-200 px-4 py-3 focus-within:border-primaryColor/60">
              <GoLock className="text-xl text-textGrayColor" />
              <input
                type="password"
                required
                value={form.password}
                onChange={handleChange("password")}
                placeholder="••••••••"
                className="w-full bg-transparent text-textDarkColor placeholder:text-textGrayColor focus:outline-none"
              />
            </div>
          </label>

          <div className="flex items-center justify-between text-sm text-textGrayColor">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primaryColor" /> I agree to the terms
            </label>
          </div>

          <button
            type="submit"
            className="w-full primary-btn py-3 text-base font-semibold rounded-2xl"
          >
            Create account
          </button>

          <p className="text-center text-sm text-textGrayColor">
            Already have an account?{" "}
            <Link to="/login" className="text-primaryColor hover:text-primaryColor/80">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;

