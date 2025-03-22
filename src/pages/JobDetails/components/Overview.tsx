import CategoryIcon from "../../../assets/icons/CategoryIcon";
import ClockIcon from "../../../assets/icons/ClockIcon";
import DegreeIcon from "../../../assets/icons/DegreeIcon";
import ExperienceIcon from "../../../assets/icons/ExperienceIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import PersonIcon from "../../../assets/icons/PersonIcon";
import SalaryIcon from "../../../assets/icons/SalaryIcon";
import { IJobDetails } from "../../../models/job";

type OverviewProps = {
  jobDetails: IJobDetails;
};

const Overview = ({ jobDetails }: OverviewProps) => {
  return (
    <div className="bg-[#EBF5F4] p-6 rounded-xl">
      <h3 className="text-lg font-bold mb-4">Job Overview</h3>
      <ul className="space-y-4 text-sm">
        <li className="flex items-center gap-3">
          <PersonIcon />
          <div>
            <h4 className="font-semibold">Job Title</h4>
            <p className="text-[#6C757D]">{jobDetails.title}</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <ClockIcon />
          <div>
            <h4 className="font-semibold">Job Type</h4>
            <p className="text-[#6C757D]">{jobDetails.jobType}</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <CategoryIcon />
          <div>
            <h4 className="font-semibold">Category</h4>
            <p className="text-[#6C757D]">{jobDetails.category}</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <ExperienceIcon />
          <div>
            <h4 className="font-semibold">Experience</h4>
            <p className="text-[#6C757D]">{jobDetails.experienceLevel}</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <DegreeIcon />
          <div>
            <h4 className="font-semibold">Degree</h4>
            <p className="text-[#6C757D]">{"N/A"}</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <SalaryIcon />
          <div>
            <h4 className="font-semibold">Offered Salary</h4>
            <p className="text-[#6C757D]">{jobDetails.salary}</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <LocationIcon />
          <div>
            <h4 className="font-semibold">Location</h4>
            <p className="text-[#6C757D]">{jobDetails.location}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Overview;
