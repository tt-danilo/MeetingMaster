import React from 'react';
import './styles.scss';

function Workspace(props) {
  return (
    <div className='workspace'>
      {props.children}
    </div>
  );
}

export default Workspace;
