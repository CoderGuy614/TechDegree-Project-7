import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound'

// This component generates the list of photos based on the data passed in as props.
const PhotoList = props => { 
  const results = props.data
  let photos;
  if (results.length > 0) {
    photos = results.map(photo => 
        <Photo
        key={photo.id}
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        title={photo.title} />
    )
  } else if(props.loading){
    return <p> loading photos.... </p>
  } else {
    photos = <NotFound />
  }

  return(
    <div className="photo-container">
        <h2> Photos of {props.title} </h2>
        <ul>
            {photos}
        </ul> 
    </div>
  );
}

export default PhotoList;
