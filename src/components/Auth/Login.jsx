import { useState } from "react";
import { Link } from "react-router-dom";
import { GoLock, GoMail } from "react-icons/go";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit for static demo
    alert(`Logged in as ${email || "demo@example.com"}`);
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
              Welcome back
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-textDarkColor">
              Login to JobHuntly
            </h2>
            <p className="mt-2 text-sm text-textGrayColor">
              Enter your details to continue your search and manage saved jobs.
            </p>
          </div>

          <label className="block space-y-2">
            <span className="text-sm text-textGrayColor">Email</span>
            <div className="flex items-center gap-3 rounded-2xl bg-[#F8F8FD] border border-gray-200 px-4 py-3 focus-within:border-primaryColor/60">
              <GoMail className="text-xl text-textGrayColor" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-textDarkColor placeholder:text-textGrayColor focus:outline-none"
              />
            </div>
          </label>

          <div className="flex items-center justify-between text-sm text-textGrayColor">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primaryColor" /> Remember me
            </label>
            <button type="button" className="text-primaryColor hover:text-primaryColor/80">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full primary-btn py-3 text-base font-semibold rounded-2xl"
          >
            Login
          </button>

          <p className="text-center text-sm text-textGrayColor">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-primaryColor hover:text-primaryColor/80">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

