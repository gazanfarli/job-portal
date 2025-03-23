import { jobTypes } from "../../../../constants/jobTypes";

const JobType = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Job Type</h3>
      <ul className="flex flex-col gap-3">
        {jobTypes.map((jobType) => (
          <li key={jobType.id}>
            <label
              htmlFor={`${jobType.title}-${jobType.id}`}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <input id={`${jobType.title}-${jobType.id}`} type="checkbox" />
                <span>{jobType.title}</span>
              </div>
              <div className="text-[#6C757D] text-base/4 bg-white px-2 py-1 rounded-xl">
                {jobType.jobCount}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobType;
