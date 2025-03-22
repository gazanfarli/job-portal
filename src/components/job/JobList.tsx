import { IJob } from "../../models/job";
import JobCard from "./JobCard";

type JobListProps = {
  isJobsLoading: boolean;
  jobs: IJob[] | null;
};

const JobList = ({ jobs, isJobsLoading }: JobListProps) => {
  if (!jobs) {
    return <div>There are currently no jobs</div>;
  }

  if (isJobsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {jobs?.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
};

export default JobList;
