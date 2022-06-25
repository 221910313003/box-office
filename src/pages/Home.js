import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

export const Home = () => {
  const [input, setinput] = useState('');

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  const onINputChange = ev => {
    setinput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onINputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button tupe="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};
