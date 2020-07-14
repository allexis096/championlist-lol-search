import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

import { Header, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>Find a champion in League of Legends</Header>
      <Form>
        <input type="text" placeholder="type the name of a champion" />
        <button type="submit">
          <RiSearchLine size={20} />
        </button>
      </Form>
    </>
  );
};

export default Dashboard;
