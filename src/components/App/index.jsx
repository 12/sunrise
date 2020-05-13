import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { FaGlobeEurope } from 'react-icons/fa';
import { getUserPosition, getSunriseSunset } from '../../helpers/geo';
import { PageBody } from '../PageBody';
import Container from '../Container';
import Item from '../Item';
import Section, { StyledH2 } from '../Section';
import Button from '../Button';

const App = () => {
  const [sun, setSun] = useState({ sunrise: 'Not Set', sunset: 'Not Set' });
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
    getUserPosition(({ coords }) => setPosition(coords));
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
      </Container>
    </>
  );
};

export default hot(App);
