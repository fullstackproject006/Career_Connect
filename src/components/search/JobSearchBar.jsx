import { Button } from 'react-bootstrap';
import './JobSearchBar.css';

export default function JobSearchBar() {
  return (
    <section className="search-bar">
      <input placeholder="Job Title" />
      <input placeholder="Location" />
      <select>
        <option>Experience</option>
        <option>0–2 Years</option>
        <option>3–5 Years</option>
      </select>
      <Button className="app-btn primary">Search Jobs</Button>
    </section>
  );
}
