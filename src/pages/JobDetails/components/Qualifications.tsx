type QualificationsProps = {
  qualifications?: string[];
};

const Qualifications = ({ qualifications }: QualificationsProps) => {
  return (
    <section className="mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
          Qualifications
        </h2>
        <ul className="space-y-2">
          {qualifications?.map((qual, index) => (
            <li key={index} className="flex items-start">
              <span className="flex justify-center items-center bg-[#309689] text-white rounded-full p-1 w-6 h-6 flex-shrink-0 mr-3">
                ✓
              </span>
              <span className="text-gray-700">{qual}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Qualifications;
