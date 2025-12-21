import JobCard from "./JobCard";
import './Jobs.css';

const jobs = [
  { title: "Software Engineer", company: "TechCorp", location: "Remote" },
  { title: "Marketing Manager", company: "Creative Inc", location: "Delhi" },
  { title: "App Developer", company: "Aiimtech", location: "Sivakasi" },
  { title: "Full Stack Developer", company: "Zoho", location: "Tenkasi" },
  { title: "Backend Developer", company: "Solaritis", location: "Madurai" },
];

export default function FeaturedJobs() {
  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="job-grid">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </section>
  );
}
