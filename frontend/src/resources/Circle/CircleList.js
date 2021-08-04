import React from 'react';
import { ListBase } from "react-admin";
import CirclePackingReact from "../../graph/CirclePackingReact";

const CircleList = props => (
  <ListBase perPage={1000} {...props}>
    <CirclePackingReact />
  </ListBase>
);

export default CircleList;
