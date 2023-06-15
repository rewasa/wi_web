type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="px-4 xl:pl-36">{children}</div>;
};
