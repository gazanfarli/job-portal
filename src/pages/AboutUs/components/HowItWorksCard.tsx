type HowItWorksCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const HowItWorksCard = ({ title, icon, description }: HowItWorksCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-8 py-14 rounded-lg shadow-lg w-80 h-80">
      <div className="p-[10px]">
        {icon}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
