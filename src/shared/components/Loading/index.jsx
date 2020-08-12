// React and Style
import React from 'react';

// Loading
import ReactLoading from 'react-loading';

const Loading = ({ width, height, color }) => {
  return (
    <ReactLoading type='spin' color={color} width={width} height={height} />
  );
};

export default Loading;
