// import * as React from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ContentCenter = ({ children }: Props) => {
  return <div className="container max-w-6xl mx-auto py-10 px-3">{children}</div>;
};

export default ContentCenter;
