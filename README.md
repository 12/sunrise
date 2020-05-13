# Sunset and Sunrise

## Description

This application gets a users current geographical position. With this position, the application will get the sunrise and sunset times at that given location.

## Deployment

This has been deployed to **Github Pages**, at https://sun.rhys.cc. Service worker available at https://sun.rhys.cc/sw.js, and manifest https://sun.rhys.cc/manifest.json.

## Building Locally

This project was built using `node@v12.13.0` and `npm@6.12.0`.

1. Clone the project `git clone git@github.com:12/sunrise.git`
2. Navigate to the directory `cd sunrise`
3. Run `npm install`
4. Run `npm run dev` and navigate to `http://localhost:3000`

## Technologies

- React
- Webpack
- Babel
- Styled Components

## Want To Add

- Relative time
- - If sunrise has passed, display 'The sunrise _was_ at _x_'
- Google Maps to allow user to select another location to get sunrise and sunset from
- Get future times

## Google Lighthouse Audit
<img src="https://i.imgur.com/h0ucpwu.png" />
