import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.h1`
  font-size: 50px;
  text-align: center;
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
