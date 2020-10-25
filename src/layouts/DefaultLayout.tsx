import React from 'react';

import Footer from '@organisms/Footer';
import Header from '@organisms/Header';
import { motion } from 'framer-motion';

const VARIANT_EASE = [0.48, 0.15, 0.25, 0.96];

const pageVariants = {
  initial: { opacity: 0, y: -10 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: VARIANT_EASE
    }
  }
};

const DefaultLayout: React.FunctionComponent = ({
  children
}) => {
  return (
    <>
      <Header />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        <main className="Main">
          {children}
        </main>
      </motion.div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
