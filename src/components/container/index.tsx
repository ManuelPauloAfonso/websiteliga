type props = {
  children: React.ReactNode;
};

function Container({ children }: props) {
  return <div className="container max-w-7xl max-auto px-4">{children}</div>;
}

export default Container;
