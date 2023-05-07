import clsx from "clsx";

type ActionButtonProps = {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
};

export const ActionButton = (props: ActionButtonProps) => {
  const { children, className, isDark, ...rest } = props;

  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center px-6 py-3 text-[1.2rem] md:text-lg font-medium tracking-tighter text-white bg-gray-800 group",
        className
      )}
      {...rest}
    >
      <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary group-hover:mt-0 group-hover:ml-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary opacity-0 group-hover:opacity-100"></span>
      <span className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
        {children}
      </span>
    </button>
  );
};
