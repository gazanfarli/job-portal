import { useState } from "react";
import JobFilter from "../../components/job/JobFilter";
import JobList from "../../components/job/JobList";
import Pagination from "../../components/pagination";
import { jobListings } from "../../constants/mocks";
import SearchResults from "./components/SearchResults";
import { usePaginator } from "../../hooks/usePaginator";

const Jobs = () => {
  const [
    filteredJobs,
    // setFilteredJobs
  ] = useState(jobListings);

  // const handleFilterChange = () => {
  //   setFilteredJobs(jobListings);
  // };

  const { currentPage, totalPages, currentItems, changePage } = usePaginator(
    filteredJobs,
    10
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-3">
          <JobFilter />
        </section>
        <section className="col-span-9">
          <SearchResults totalResults={filteredJobs.length} />
          <div className="mb-10">
            <JobList jobs={currentItems} isJobsLoading={false} />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changePage}
          />
        </section>
      </div>
    </div>
  );
};

export default Jobs;
