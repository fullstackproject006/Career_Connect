import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import JobSearchBar from "../components/search/JobSearchBar";
// import TrustBar from "../components/trust/TrustBar";
import FeaturedJobs from "../components/jobs/FeaturedJobs";
import HowItWorks from "../components/howItWorks/HowItWorks";
// import TopCompanies from "../components/companies/TopCompanies";
// import Testimonials from "../components/testimonials/Testimonials";
import FinalCTA from "../components/cta/FinalCTA";
import Footer from "../components/layout/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <JobSearchBar />
      <FeaturedJobs />
      <HowItWorks />
      <FinalCTA />
      <Footer/>
    </>
  );
}
