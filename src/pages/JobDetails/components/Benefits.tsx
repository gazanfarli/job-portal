type BenefitsProps = {
  benefits?: string[];
};

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <section className="mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
          Benefits
        </h2>
        <ul className="space-y-2">
          {benefits?.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="flex justify-center items-center bg-[#309689] text-white rounded-full p-1 w-6 h-6 flex-shrink-0 mr-3">
                ✓
              </span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
