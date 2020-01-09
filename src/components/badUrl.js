import React from 'react';
// This component gets rendered in case of a 404 error
const badUrl = props => (
  <ul className='not-found'>
    <h1>404 Error</h1>
    <h1>Redirecting....</h1>
  </ul>
);

export default badUrl;