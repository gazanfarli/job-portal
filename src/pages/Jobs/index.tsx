import JobCard from "../../components/job/JobCard";
import { jobListings } from "../../constants/mocks";

const Job = () => {
  return (
    <div>
      {jobListings.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
};

export default Job;
