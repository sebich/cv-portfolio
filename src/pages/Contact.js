import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marked-alt"></i>
              <span>Champcueil</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0601959980">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert('N° de téléphone copié !');
                  }}
                >
                  06 01 95 99 80
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="seb082011@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert('E-mail copié !');
                  }}
                >
                  seb082011@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/sebastien-fernandes-7a7169165/"
              title="nouvelle fenêtre profil linkedin"
              // noopener interdit toutes modifications de l'URL
              // noreferrer empêche les sites externes visés par le lien d'obtenir des information sur l'origine du trafic
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/sebich"
              title="nouvelle fenêtre profil github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
