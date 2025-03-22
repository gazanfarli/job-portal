import CategoryList from "../../components/category/CategoryList";
import JobList from "../../components/job/JobList";
import { categories, jobListings } from "../../constants/mocks";

const Home = () => {
  return (
    <div>
      <div className="w-full flex justify-center bg-[rgba(48,150,137,0.1)] px-4">
        <div className="max-w-7xl w-full mx-auto text-center py-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
          </p>
          <div className="mt-10">
            <CategoryList categories={categories} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mt-10 text-center md:text-left">
          Recent Jobs Available
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
        </p>
        <div className="mt-8">
          <JobList jobs={jobListings} isJobsLoading={false} />
        </div>
      </div>
    </div>
  );
};

export default Home;
