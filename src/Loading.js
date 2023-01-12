import React from 'react';
import classes from '../src/Spinner.module.css';
const Loading = () => {
  return (

    <div className={classes['lds-spinner']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div >

  );
};

export default Loading;
