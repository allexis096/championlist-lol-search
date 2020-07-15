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
    text-align: center;

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
  position: relative;
  margin-top: 50px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 1fr 200px 200px;
  grid-template-areas: 'backProfile' 'lore' 'stats';
`;

export const Profile = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 0.6;
  position: absolute;
  left: -30px;
  top: -30px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
`;

export const BackgroundProfile = styled.img`
  grid-area: 'backProfile';
  width: 300px;
  height: 180px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Lore = styled.div`
  grid-area: 'lore';
  padding: 0 5px;

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
    margin-top: 25px;
  }
`;

export const ClassHero = styled.div`
  grid-area: 'stats';
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    padding: 0 25px;

    li {
      background: #000;
      color: #fff;
      border-radius: 3px;
      font-size: 16px;
      padding: 5px;
    }
  }

  strong {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
`;
