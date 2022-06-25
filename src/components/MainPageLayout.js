import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        tilte="Box office"
        subtitle="Are you looking for Movie or an Actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
