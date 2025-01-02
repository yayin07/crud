import React from "react";

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default BooksLayout;
