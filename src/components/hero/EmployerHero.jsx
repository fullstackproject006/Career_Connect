import { Button } from "react-bootstrap";

export default function EmployerHero() {
  return (
    <div className="hero-right">
      <h1>Hire faster with better candidates</h1>
      <p>Post a job and reach millions of professionals</p>

      <Button className="btn primary large">Post a Job</Button>
      <span className="hint">Free job posting • No credit card required</span>
    </div>
  );
}
