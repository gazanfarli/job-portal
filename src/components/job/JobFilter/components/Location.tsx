import ReactSelect from "../../../ui/ReactSelect";

const Location = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Location</h3>
      <ReactSelect options={[]} isSearchable placeholder="Choose city" />
    </div>
  );
};

export default Location;
