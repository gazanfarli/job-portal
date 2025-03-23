import { howItWorksItems } from "../../../constants/howItWorksItems";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <section className="py-20">
      <h1 className="text-5xl text-center font-bold mb-14">How it works</h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
        {howItWorksItems.map((item) => (
          <HowItWorksCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
