import { NextPage } from 'next';
import React from 'react';

import Button from '@atoms/Button';

import { AppContext } from '../src/context/AppContext';

const HomePage: NextPage = () => {
  const { tvSchedule } = React.useContext(AppContext);

  return (
    <>
      <h1>This is the homepage</h1>
      <Button>
        Test
      </Button>
    </>
  );
};

export default HomePage;
