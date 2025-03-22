type RequirementsProps = {
  requirements?: string[];
  responsibilities?: string[];
};

const Requirements = ({ requirements, responsibilities }: RequirementsProps) => {
  return (
    <section className="space-y-6">
      {requirements && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
            Requirements
          </h2>
          <ul className="space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="flex justify-center items-center bg-[#309689] text-white rounded-full p-1 w-6 h-6 flex-shrink-0 mr-3">
                  ✓
                </span>
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {responsibilities && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
            Responsibilities
          </h2>
          <ul className="space-y-2">
            {responsibilities.map((res, index) => (
              <li key={index} className="flex items-start">
                <span className="flex justify-center items-center bg-[#309689] text-white rounded-full p-1 w-6 h-6 flex-shrink-0 mr-3">
                  ✓
                </span>
                <span className="text-gray-700">{res}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Requirements;
