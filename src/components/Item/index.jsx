import styled from 'styled-components';

const BG_COLOURS = {
  sunrise: '#44bd32',
  sunset: '#353b48',
  base: '#718093',
};

const Item = styled.div`
  background: ${({ colour }) => BG_COLOURS[colour] || BG_COLOURS['base']};
  color: ${({ colour }) => (colour === 'sunset' ? '#F0F0F0' : '#222222')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export default Item;
