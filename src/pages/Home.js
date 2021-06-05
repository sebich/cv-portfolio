import React from 'react';
import Navigation from '../components/Navigation';

const home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Développeur web front-end</h1>
          <h2>Spécialisation React</h2>
          <div className="textContent">
            <p>
              Doté d'une grande curiosité pour l'univers du web, je suis
              titulaire du titre professionnel de niveau III de développeur web.
              J'ai souhaité me spécialiser dans le développement font-end et la
              création de site internet. Nouveau défi, envie d'apprendre et
              persévérance sont les quelques mots qui résument mon état
              d'esprit. Motivé par ce nouveau challenge professionnel, j'ai hâte
              de partager et d'approfondir mes nouvelles connaissances au sein
              d'une entreprise dynamique.
            </p>
          </div>
          <div className="pdf">
            <a
              href="./media/CV_sebastien_fernandes_2021.pdf"
              title="nouvelle fenêtre cv pdf"
              target="_blank"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
