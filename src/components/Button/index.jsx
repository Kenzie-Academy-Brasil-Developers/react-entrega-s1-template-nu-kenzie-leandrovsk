import React from "react";

export const ChangePageBtn = ({ setPage, children, className, isTrue }) => {
  return (
    <button className={className} onClick={() => setPage(isTrue)}>
      {children}
    </button>
  );
};

export const FormSubmitBtn = ({ children, className }) => {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

export const FilterBtn = ({ children, className, setFilter, filter, value }) => {
  const classFilter = value === filter ? "selected" : className;
  return (
    <button onClick={() => setFilter(value)} className={classFilter}>
      {children}
    </button>
  );
};
