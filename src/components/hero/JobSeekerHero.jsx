export default function JobSeekerHero() {
  return (
    <div className="hero-left">
      <h1>Find the job that fits your life</h1>
      <p>Search thousands of jobs from verified companies</p>

      <div className="hero-search">
        <input placeholder="Job title or keyword" />
        <input placeholder="Location" />
        <button className="btn primary">Search Jobs</button>
      </div>

      <a href="#" className="link">Upload Resume</a>
    </div>
  );
}
