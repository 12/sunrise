export const getSunriseSunset = ({ latitude, longitude }) => {
  const ssApiEndpoint = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;
  return fetch(ssApiEndpoint).then((res) => res.json());
};

export const getUserPosition = (cb, err) => {
  if (!('geolocation' in navigator)) return false;

  const opts = {
    enableHighAccuracy: true,
    maximumAge: 36000,
    timout: 2700,
  };

  navigator.geolocation.getCurrentPosition(cb, err, opts);
};
