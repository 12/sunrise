import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  height: 100%;

  @media all and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
`;

export default Container;
