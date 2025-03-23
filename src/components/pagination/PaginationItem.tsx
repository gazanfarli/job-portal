type PaginationItemProps = {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const PaginationItem = ({
  label,
  active = false,
  disabled = false,
  onClick,
}: PaginationItemProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1 rounded border transition-colors ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"}`}
    >
      {label}
    </button>
  );
};

export default PaginationItem;
