import { useState } from "react";

const Salary = () => {
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 1000]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setSalaryRange([newMin, salaryRange[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    setSalaryRange([salaryRange[0], newMax]);
  };

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold">Salary Range</h3>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="minSalary" className="text-gray-700 text-sm">
            Min Salary
          </label>
          <input
            type="number"
            id="minSalary"
            value={salaryRange[0]}
            onChange={handleMinChange}
            className="w-full bg-white px-3 py-1 rounded-xl focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="maxSalary" className="text-gray-700 text-sm">
            Max Salary
          </label>
          <input
            type="number"
            id="maxSalary"
            value={salaryRange[1]}
            onChange={handleMaxChange}
            className="w-full bg-white px-3 py-1 rounded-xl focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="w-14 h-7 flex justify-center items-center text-sm text-white font-semibold bg-[#309689] rounded hover:bg-teal-700 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Salary;
