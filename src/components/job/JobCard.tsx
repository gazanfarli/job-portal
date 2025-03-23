import { IJob } from "../../models/job";
import Badge from "../ui/badge";
import favoriteIcon from "../../assets/favorites.svg";
import briefcaseIcon from "../../assets/briefcase.svg";
import clockIcon from "../../assets/clock.svg";
import walletIcon from "../../assets/g135.svg";
import mapPinIcon from "../../assets/map-pin.svg";
import { formatPostedTime } from "../../utils";
import { Link } from "react-router-dom";

type JobCardProps = {
  job: IJob;
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="p-10 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center mb-4">
        <Badge text={formatPostedTime(job.postedDate)} />
        <img
          src={favoriteIcon}
          alt="Add to favorites"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <img src={briefcaseIcon} alt="Category icon" className="w-4 h-4" />
            <p className="text-sm">{job.category}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={clockIcon} alt="Job type icon" className="w-4 h-4" />
            <p className="text-sm">{job.jobType}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={walletIcon} alt="Salary icon" className="w-4 h-4" />
            <p className="text-sm">{job.salary}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={mapPinIcon} alt="Location icon" className="w-4 h-4" />
            <p className="text-sm">{job.location}</p>
          </div>
        </div>

        <button>
          <Link to={`/job-details/${job.id}`}>Job details</Link>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
