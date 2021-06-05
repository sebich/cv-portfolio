import React from 'react';

const DegreesAnCertifications = () => {
  return (
    <div className="degree">
      <h3>Diplômes et Certifications</h3>
      <div className="deg1">
        <h4>
          <a href="../../media/Certification Opquast.pdf">
            Certification Opquast
          </a>
          - Maîtrise de la qualité web en projet web
        </h4>
        <h5>2021</h5>
        <ul>
          <li>Maîtriser le vocabulaire et les métiers du projet Web.</li>
          <li>
            Prendre en compte la diversité et les exigences des utilisateurs.
          </li>
          <li>
            Connaître les bonnes pratiques, leur conception et leur utilisation.
          </li>
          <li>Utiliser une check-list qualité Web.</li>
          <li>Prévenir les risques, renforcer l’assurance qualité Web.</li>
        </ul>
      </div>
      <div className="deg2">
        <h4>
          <a href="../../media/Titre professionnel DWWM.jpg">TP Niveau III</a>-
          Développeur web
        </h4>
        <h5>2019</h5>
        <ul>
          <li>
            Développer la partie frontend d’une application web ou web mobile en
            intégrant les recommandations de sécurité.
          </li>
          <li>
            Développer la partie backend d’une application web ou web mobile en
            intégrant les recommandations de sécurité.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DegreesAnCertifications;
