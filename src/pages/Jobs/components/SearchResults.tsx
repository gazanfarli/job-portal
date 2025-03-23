import { sortTypes } from "../../../constants/sortTypes";

type SearchResultsProps = {
  totalResults?: number;
  startResult?: number;
  endResult?: number;
};

const SearchResults = ({
  totalResults = 0,
  startResult = 0,
  endResult = 0,
}: SearchResultsProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-xl font-medium text-[#6C757D]">
        Showing {startResult}-{endResult} of {totalResults} results
      </div>
      <div>
        <select className="border border-gray-300 rounded-md p-2 text-sm">
          {sortTypes.map((sortType) => (
            <option value={sortType.value}>{sortType.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchResults;
