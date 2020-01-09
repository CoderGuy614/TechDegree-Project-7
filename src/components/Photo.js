// This component renders a photo to PhotoList based on the url passed to it.
import React from 'react';

const Photo = props => (
  <li>
    <img src={props.url} alt=""/>
  </li>
);

export default Photo;