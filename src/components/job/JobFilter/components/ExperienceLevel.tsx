import { experienceLevels } from "../../../../constants/experienceLevels";

const ExperienceLevel = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Job Type</h3>
      <ul className="flex flex-col gap-3">
        {experienceLevels.map((experienceLevel) => (
          <li key={experienceLevel.id}>
            <label
              htmlFor={`${experienceLevel.title}-${experienceLevel.id}`}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <input
                  id={`${experienceLevel.title}-${experienceLevel.id}`}
                  type="checkbox"
                />
                <span>{experienceLevel.title}</span>
              </div>
              <div className="text-[#6C757D] text-base/4 bg-white px-2 py-1 rounded-xl">
                {experienceLevel.jobCount}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceLevel;
