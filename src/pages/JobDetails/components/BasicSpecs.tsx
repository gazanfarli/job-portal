import CategoryIcon from "../../../assets/icons/CategoryIcon";
import JobTypeIcon from "../../../assets/icons/JobTypeIcon";
import SalaryIcon from "../../../assets/icons/SalaryIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";

type BasicSpecsProps = {
  category?: string;
  jobType?: string;
  salary?: string;
  location?: string;
};

const BasicSpecs = ({
  category,
  jobType,
  salary,
  location,
}: BasicSpecsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <ul className="flex flex-wrap gap-4">
        {category && (
          <li className="flex items-center gap-2">
            <CategoryIcon />
            <p className="text-sm md:text-base">{category}</p>
          </li>
        )}
        {jobType && (
          <li className="flex items-center gap-2">
            <JobTypeIcon />
            <p className="text-sm md:text-base">{jobType}</p>
          </li>
        )}
        {salary && (
          <li className="flex items-center gap-2">
            <SalaryIcon />
            <p className="text-sm md:text-base">{salary}</p>
          </li>
        )}
        {location && (
          <li className="flex items-center gap-2">
            <LocationIcon />
            <p className="text-sm md:text-base">{location}</p>
          </li>
        )}
      </ul>
      <button className="w-full sm:w-auto mt-4 sm:mt-0 px-6 py-2 bg-[#309689] text-white font-semibold rounded-lg hover:bg-[#287a73] cursor-pointer transition">
        Apply Job
      </button>
    </div>
  );
};

export default BasicSpecs;
