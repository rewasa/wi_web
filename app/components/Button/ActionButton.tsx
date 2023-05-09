import clsx from "clsx";

type ActionButtonProps = {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
};

export const ActionButton = (props: ActionButtonProps) => {
  const { children, className, isDark = false, ...rest } = props;
  const border = isDark ? "bg-gray-200" : "bg-gray-800";
  const background = isDark ? "bg-primary" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center px-6 py-3 text-[1.2rem] md:text-lg font-medium tracking-tighter text-white bg-gray-800 group",
        className
      )}
      {...rest}
    >
      <span
        className={clsx(
          "absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary group-hover:mt-0 group-hover:ml-0"
        )}
      ></span>
      <span className={clsx("absolute inset-0 w-full h-full bg-white")}></span>
      <span
        className={clsx(
          "absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary opacity-0 group-hover:opacity-100"
        )}
      ></span>
      <span
        className={clsx(
          "relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-black"
        )}
      >
        {children}
      </span>
    </button>
  );
};
