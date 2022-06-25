import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

export const Home = () => {
  const [input, setinput] = useState('');
  const [results, setresult] = useState(null);

  const onSearch = () => {
    apiGet(`shows?q=${input}`).then(result => {
      setresult(result);
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

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
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
      {renderResults()}
    </MainPageLayout>
  );
};
