import React from 'react';

const CircleTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default CircleTitle;
