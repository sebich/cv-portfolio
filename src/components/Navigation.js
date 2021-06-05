import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/sebastien-fernandes.jpg" alt="profil-pic" />
          <h3>Sébastien Fernandes</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fass fa fa-laptop-code"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-card"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/sebastien-fernandes-7a7169165/"
              // title= bonne pratique Opquast
              title="nouvelle fenêtre profil linkedin"
              // noopener interdit toutes modifications de l'URL
              // noreferrer empêche les sites externes visés par le lien d'obtenir des information sur l'origine du trafic
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sebich"
              title="nouvelle fenêtre profil github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>Sébastien fernandes - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
