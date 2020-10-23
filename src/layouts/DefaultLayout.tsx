import React from 'react';

import Footer from '@organisms/Footer';
import Header from '@organisms/Header';

const DefaultLayout: React.FunctionComponent = ({
  children
}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
