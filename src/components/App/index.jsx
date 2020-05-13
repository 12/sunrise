import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { FaGlobeEurope } from 'react-icons/fa';
import { getUserPosition, getSunriseSunset } from '../../helpers/geo';
import { PageBody } from '../PageBody';
import Container from '../Container';
import Item from '../Item';
import Section, { StyledH2 } from '../Section';
import Button from '../Button';
import Footer from '../Footer';

const App = () => {
  const [sun, setSun] = useState({ sunrise: 'Not Set', sunset: 'Not Set' });
  const [lastFetched, setLastFetched] = useState(null);
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (!position.longitude || !position.longitude) return undefined;

    getSunriseSunset(position).then(({ results: { sunrise, sunset } }) =>
      setSun({ sunrise, sunset }),
    );
  }, [position]);

  const handleClick = (e) => {
    e.preventDefault();
    getUserPosition(
      ({ coords, timestamp }) => {
        setPosition(coords);
        setLastFetched(timestamp);
      },
      () =>
        setSun({ sunrise: 'There was an error', sunset: 'There was an error' }),
    );
  };

  return (
    <>
      <PageBody />
      <Button onClick={handleClick}>
        <span>Get Location</span> <FaGlobeEurope />
      </Button>
      <Container>
        <Item colour="sunrise">
          <Section>
            <StyledH2>Today's Sunrise is at:</StyledH2>
            <p>{sun.sunrise}</p>
          </Section>
        </Item>
        <Item colour="sunset">
          <Section>
            <StyledH2>Today's Sunset is at:</StyledH2>
            <p>{sun.sunset}</p>
          </Section>
        </Item>
        {lastFetched && (
          <Footer>Last fetched: {new Date(lastFetched).toGMTString()}</Footer>
        )}
      </Container>
    </>
  );
};

export default hot(App);
