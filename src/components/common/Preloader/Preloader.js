import preloader from '../../../assets/images/Spinner-1s-200px.svg';
import React from 'react';

let Preloader = () => {
  return (
    <div style={{backgroundColor: 'blue'}}>
      <img src={preloader} alt="preloader"/>
    </div>

  )
}

export default Preloader;