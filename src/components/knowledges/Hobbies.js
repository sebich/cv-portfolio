import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centres d'intérêt</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-dragon"></i>Lecture : Romans Fantasy
        </li>
        <li className="hobby">
          <i className="fas fa-film"></i>cinéma : Animation, SF, Fantasy,
          Horreur
        </li>
        <li className="hobby">
          <i className="fas fa-basketball-ball"></i>Basket
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>Randonnées
        </li>
        <li className="hobby">
          <i className="fas fa-laptop-code"></i>Code : Veille technologique
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
