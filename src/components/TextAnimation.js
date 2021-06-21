import React from 'react';

const TextAnimation = () => {
  const speArray = 'Spécialisation React'.split('');

  return (
    <>
      {speArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
};

export default TextAnimation;
