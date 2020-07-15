import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.h1`
  font-size: 50px;
  text-align: center;
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  input {
    flex: 1;
    max-width: 500px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    padding-left: 10px;

    &::placeholder {
      text-align: center;
      color: #aaa;
    }
  }

  button {
    width: 100px;
    color: #fff;
    background: #30c452;
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: background 0.5s;

    &:hover {
      background: ${shade(0.2, '#30c452')};
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`;

export const Card = styled.div`
  max-width: 300px;
  position: relative;
  padding: 0 10px;
  margin-top: 50px;
  border-radius: 4px;
  box-shadow: 10px 3px 15px -4px rgba(0, 0, 0, 0.75);

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    left: -30px;
    top: -30px;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
    margin-top: 25px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }

  strong {
    margin: 25px 0;
    display: flex;
    justify-content: center;
  }
`;
