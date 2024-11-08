const Badge = ({ count }) => {
  return (
    <span className="absolute -top-[45%] -right-[50%] inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
      {count}
    </span>
  );
};

export default Badge;
