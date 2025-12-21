import JobSeekerHero from "./JobSeekerHero";
import EmployerHero from "./EmployerHero";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <JobSeekerHero />
      <EmployerHero />
    </section>
  );
}
