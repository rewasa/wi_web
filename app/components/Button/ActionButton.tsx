import clsx from "clsx";

type ActionButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const ActionButton = (props: ActionButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button className={clsx("btn-primary btn", className)} {...rest}>
      {children}
    </button>
  );
};
