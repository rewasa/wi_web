type HTMLComponentProps = {
  html: string;
};

export const HTMLComponent = (props: HTMLComponentProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.html,
      }}
    />
  );
};
