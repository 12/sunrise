import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '../Button';

const App = () => {
  const [postition, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  const parseLocation = (pos) => {
    const { latitude, longitude } = pos.coords;

    setPosition({ latitude, longitude });
  };

  const handleGeoError = (e) => {
    console.log('err', e);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!('geolocation' in navigator)) return false;

    const opts = {
      enableHighAccuracy: true,
      maximumAge: 36000,
      timout: 2700,
    };

    navigator.geolocation.getCurrentPosition(
      parseLocation,
      handleGeoError,
      opts,
    );
  };

  return (
    <>
      <h1>GeoIP Locator</h1>
      <Button onClick={handleClick}>Click Me</Button>
      {postition.latitude},{postition.longitude}
    </>
  );
};

export default hot(App);
