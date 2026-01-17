import { Button } from 'react-bootstrap';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div>
        <h3>Ready to find your next job?</h3>
        <Button className="app-btn secondary">Search Jobs</Button>
      </div>

      <div>
        <h3>Start hiring today</h3>
        <Button className="app-btn primary">Post a Job</Button>
      </div>
    </section>
  );
}
