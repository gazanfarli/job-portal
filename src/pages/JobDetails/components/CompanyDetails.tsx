type CompanyDetailsProps = {
  companyDetails: string;
};

const CompanyDetails = ({ companyDetails }: CompanyDetailsProps) => {
  return (
    <section className="mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
          Company Details
        </h2>
        <p className="text-gray-700">{companyDetails}</p>
      </div>
    </section>
  );
};

export default CompanyDetails;
