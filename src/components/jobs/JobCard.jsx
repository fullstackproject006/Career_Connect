export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <span>{job.location}</span>
      <div className="apply-btn">
        <button className="btn outline">Apply Now</button>
      </div>
    </div>
  );
}
