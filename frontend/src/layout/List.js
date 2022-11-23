import React from "react";
import { ListBase } from "react-admin";
import ListView from "./ListView";

const List = ({ filters, children, ...rest }) => {
  return (
    <ListBase {...rest}>
      <ListView filters={filters}>
        {children}
      </ListView>
    </ListBase>
  );
};

export default List;
