type HowToApplyProps = {
  howToApply: string;
};

const HowToApply = ({ howToApply }: HowToApplyProps) => {
  return (
    <section className="mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
          How to Apply
        </h2>
        <p className="text-gray-700">{howToApply}</p>
      </div>
    </section>
  );
};

export default HowToApply;
