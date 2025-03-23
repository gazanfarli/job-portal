const SearchByTitle = () => {
  return (
    <label htmlFor="job-title">
      <h3 className="text-xl font-semibold mb-5">Search by Job Title</h3>
      <input
        id="job-title"
        type="text"
        className="w-full bg-white px-3 py-[10px] rounded-xl focus:outline-none"
        placeholder="Job title or company"
      />
    </label>
  );
};

export default SearchByTitle;
