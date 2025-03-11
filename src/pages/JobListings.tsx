import JobCard from "../components/job/JobCard";
import { jobListings } from "../constants/mocks";

const JobListings = () => {
  return (
    <div>
      <h1>Jobs</h1>
      {jobListings.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
};

export default JobListings;
