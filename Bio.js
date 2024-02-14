import React from 'react';

const Bio = ({ name, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Bio;
