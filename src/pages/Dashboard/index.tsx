import React, { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import backgroundLogo from '../../assets/background-logo.png';

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
  name: string;
}

const Dashboard: React.FC = () => {
  const [newHero, setNewHero] = useState<Heroes[]>([]);

  useEffect(() => {
    const loader = async (): Promise<void> => {
      const response = await api.get(`cdn/10.14.1/data/en_US/champion.json`);

      setNewHero(Object.values(response.data.data));
    };

    loader();
  }, []);

  return (
    <>
      <Header>
        League of Legends Champion Finder
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
            <Profile
              src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${hero.id}.png`}
              alt={hero.id}
            />
            <BackgroundProfile
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${hero.id}_0.jpg`}
              alt={hero.id}
            />
            <Lore>
              <h1>{hero.name}</h1>
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
