import React, { FormEvent, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import profile from '../../assets/profile.png';
import backgroundLogo from '../../assets/background-logo.png';

import api from '../../services/api';

import { Header, Form, Card, CardContainer } from './styles';

const Dashboard: React.FC = () => {
  const [newHero, setNewHero] = useState('');

  async function handleSearchChampion(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`${newHero}.json`);

    const hero = response.data;

    return console.log(hero);
  }

  return (
    <>
      <Header>
        Find a champion in League of Legends
        <img src={backgroundLogo} alt="background" />
      </Header>
      <Form onSubmit={handleSearchChampion}>
        <input
          value={newHero}
          onChange={e => setNewHero(e.target.value)}
          type="text"
          placeholder="type the name of a champion"
        />
        <button type="submit">
          <RiSearchLine size={20} />
        </button>
      </Form>
      <CardContainer>
        <Card>
          <img src={profile} alt="profile" />
          <h1>Jinx</h1>
          <p>
            Com uma conexão inata com o poder latente de Runeterra, Ahri é uma
            vastaya capaz de transformar magia em orbes de pura energia. Ela
            gosta de brincar com suas presas manipulando suas emoções antes de
            devorar suas essências vitais. Apesar de sua natureza...
          </p>
          <ul>
            <li>Assassin</li>
            <li>Marksman</li>
            <li>Fighter</li>
          </ul>
          <strong>A Espada Darkin</strong>
        </Card>
      </CardContainer>
    </>
  );
};

export default Dashboard;
