import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      stlye={{ width: '50px', margin: 'auto', display: 'block' }}
      alt='Loding...'
    />
  </Fragment>
);
