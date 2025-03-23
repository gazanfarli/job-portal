import SearchByTitle from "./components/SearchByTitle";
import Location from "./components/Location";
import Category from "./components/Category";
import JobType from "./components/JobType";
import ExperienceLevel from "./components/ExperienceLevel";
import Salary from "./components/Salary";

const JobFilter = () => {
  return (
    <div className="bg-[#EBF5F4] rounded-xl px-5 py-10">
      <div className="flex flex-col gap-6">
        <SearchByTitle />
        <Location />
        <Category />
        <JobType />
        <ExperienceLevel />
        <Salary />
      </div>
    </div>
  );
};

export default JobFilter;
