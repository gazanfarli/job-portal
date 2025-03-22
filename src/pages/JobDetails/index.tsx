import { jobDetails } from "../../constants/mocks";
import Benefits from "./components/Benefits";
import HowToApply from "./components/HowToApply";
import CompanyDetails from "./components/CompanyDetails";
import Qualifications from "./components/Qualifications";
import Requirements from "./components/Requirements";
import Skills from "./components/Skills";
import JobInfoHeader from "./components/JobInfoHeader";
import BasicSpecs from "./components/BasicSpecs";
import Overview from "./components/Overview";

const JobDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10">
      <div className="mb-4">
        <a href="/jobs" className="text-blue-600 hover:underline">
          &larr; Back to Job Listings
        </a>
      </div>

      <div className="mb-6">
        <JobInfoHeader
          jobTitle={jobDetails.title}
          company={jobDetails.company}
          companyLogo={jobDetails.companyLogo}
        />
      </div>

      <div className="mb-10">
        <BasicSpecs
          category={jobDetails.category}
          jobType={jobDetails.jobType}
          salary={jobDetails.salary}
          location={jobDetails.location}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <section className="md:col-span-8">
          <Requirements
            requirements={jobDetails.requirements}
            responsibilities={jobDetails.responsibilities}
          />
          <Qualifications qualifications={jobDetails.qualifications} />
          <Skills skills={jobDetails.skills} />
          <Benefits benefits={jobDetails.benefits} />
          <HowToApply howToApply={jobDetails.howToApply} />
          <CompanyDetails companyDetails={jobDetails.companyDetails} />
        </section>

        <section className="md:col-span-4">
          <Overview jobDetails={jobDetails} />
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
