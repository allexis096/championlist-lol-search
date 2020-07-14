import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

import profile from '../../assets/profile.png';
import backgroundLogo from '../../assets/background-logo.png';

import { Header, Form, Card } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        Find a champion in League of Legends
        <img src={backgroundLogo} alt="background" />
      </Header>
      <Form>
        <input type="text" placeholder="type the name of a champion" />
        <button type="submit">
          <RiSearchLine size={20} />
        </button>
      </Form>
      <Card>
        <img src={profile} alt="profile" />
        <h1>Jinx</h1>
        <p>
          Com uma conexão inata com o poder latente de Runeterra, Ahri é uma
          vastaya capaz de transformar magia em orbes de pura energia. Ela gosta
          de brincar com suas presas manipulando suas emoções antes de devorar
          suas essências vitais. Apesar de sua natureza...
        </p>
        <ul>
          <li>Assassin</li>
          <li>Marksman</li>
          <li>Fighter</li>
        </ul>
        <strong>A Espada Darkin</strong>
      </Card>
    </>
  );
};

export default Dashboard;
