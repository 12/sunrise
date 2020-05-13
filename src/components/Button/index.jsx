import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 25px;
  background: #feca57;
  color: #2f3640;
  cursor: pointer;

  &:hover {
    background: #fbc531;
  }

  span {
    font-size: 1.25rem;
    float: left;
    padding: 7px 10px 10px 10px;
  }

  svg {
    float: right;
    font-size: 2rem;
    margin: 0;
    padding-top: 4px;
  }
`;

export default Button;
