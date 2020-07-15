import React, { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import profile from '../../assets/profile.png';
import backgroundLogo from '../../assets/background-logo.png';
import backLogo from '../../assets/backLogo.png';

import api from '../../services/api';

import {
  Header,
  Form,
  Card,
  CardContainer,
  BackgroundProfile,
  ClassHero,
  Lore,
  Profile,
} from './styles';

interface Heroes {
  id: string;
}

const Dashboard: React.FC = () => {
  const [newHero, setNewHero] = useState<Heroes[]>([]);

  useEffect(() => {
    const loader = async (): Promise<void> => {
      const response = await api.get(`cdn/10.14.1/data/en_US/champion.json`);

      setNewHero(Object.values(response.data.data));

      console.log(Object.values(response.data.data));
    };

    loader();
  }, []);

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
      <CardContainer>
        {newHero.map(hero => (
          <Card key={hero.id}>
            <Profile src={profile} alt="profile" />
            <BackgroundProfile src={backLogo} alt="test" />
            <Lore>
              <h1>Jinx</h1>
              <p>
                Com uma conexão inata com o poder latente de Runeterra, Ahri é
                uma vastaya capaz de transformar magia em orbes de pura energia.
                Ela gosta de brincar com suas presas manipulando suas emoções
                antes de devorar suas essências vitais. Apesar de sua
                natureza...
              </p>
            </Lore>
            <ClassHero>
              <ul>
                <li>Assassin</li>
                <li>Marksman</li>
                <li>Fighter</li>
              </ul>
              <strong>A Espada Darkin</strong>
            </ClassHero>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default Dashboard;
