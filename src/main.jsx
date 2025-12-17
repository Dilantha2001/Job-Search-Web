import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Cta from "./components/Cta/Cta";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import LatestJobs from "./components/LatestJobs/LatestJobs";
import PageNotFount from "./components/PageNotFount/PageNotFount";
import FindJobs from "./components/FindJobs/FindJobs";
import BrowseCompanies from "./components/BrowseCompanies/BrowseCompanies";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

// smooth scrolling
import Lenis from "lenis";

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export const MainLayout = () => (
  <>
    <Home />
    <Brands />
    <Categories />
    <Cta />
    <FeaturedJobs />
    <LatestJobs />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainLayout />} />
      <Route path="/find-jobs" element={<FindJobs />} />
      <Route path="/companies" element={<BrowseCompanies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFount />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
