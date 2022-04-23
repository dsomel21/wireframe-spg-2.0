interface Props {
  message?: string;
  customClass?: string;
}

function BadgeNew({ message, customClass }: Props) {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 ${customClass}`}
    >
      <svg
        className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      {message || "New"}
    </span>
  );
}

export default BadgeNew;
