import React from "react";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-4 mt-4">{children}</div>
    </div>
  );
};

export default Container;
