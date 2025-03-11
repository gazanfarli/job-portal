type BadgeProps = {
  text: string;
  color?: string;
  bgColor?: string;
  className?: string;
};

const Badge = ({
  text,
  color = "text-white",
  bgColor = "bg-blue-500",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${bgColor} ${color} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
