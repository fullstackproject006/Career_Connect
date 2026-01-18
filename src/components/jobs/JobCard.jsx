import { Button } from "react-bootstrap";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <span>{job.location}</span>
      <div className="apply-btn">
        <Button className="app-btn outline">Apply Now</Button>
      </div>
    </div>
  );
}
