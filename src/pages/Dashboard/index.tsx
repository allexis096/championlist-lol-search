import React, { useState, useEffect } from 'react';

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
  blurb: string;
  tags: [];
  title: string;
}

const Dashboard: React.FC = () => {
  const [newHero, setNewHero] = useState<Heroes[]>([]);
  const [heroSearch, setHeroSearch] = useState('');

  useEffect(() => {
    const loader = async (): Promise<void> => {
      const response = await api.get(`cdn/10.14.1/data/en_US/champion.json`);

      setNewHero(Object.values(response.data.data));
    };

    loader();
  }, []);

  const filteredChampions = newHero.filter(champion => {
    return champion.name
      .toLocaleLowerCase()
      .includes(heroSearch.toLocaleLowerCase());
  });

  return (
    <>
      <Header>
        League of Legends Champion Finder
        <img src={backgroundLogo} alt="background" />
      </Header>
      <Form>
        <input
          onChange={e => setHeroSearch(e.target.value)}
          type="text"
          placeholder="type the name of a champion"
        />
      </Form>
      <CardContainer>
        {filteredChampions.map(hero => (
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
              <p>{hero.blurb}</p>
            </Lore>
            <ClassHero>
              <ul>
                {hero.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <strong>{hero.title}</strong>
            </ClassHero>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default Dashboard;
