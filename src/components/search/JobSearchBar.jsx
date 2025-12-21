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
      <button className="btn primary">Search Jobs</button>
    </section>
  );
}
