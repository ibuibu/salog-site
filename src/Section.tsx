type Props = {
  children: JSX.Element;
};

export const Section: React.VFC<Props> = ({ children }) => {
  return <section className="p-8">{children}</section>;
};

