// Loading.js

import React from 'react';
import LoadingSpinner from 'react-loading';

const Loading = ({visible}) => {
  return (
visible&&    <div
style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}
>
<LoadingSpinner  type='bars' color="#fff" />
</div>
  );
};

export default Loading;
