import React from 'react';

const Experiences = () => {
  return (
    <div className="experiences">
      <h3>Expériences</h3>
      <div className="exp1">
        <h4>Développeur web - IpConsulting | Dourdan(91)</h4>
        <h5>févr.2019 - avr.2019</h5>
        <ul>
          <li>Réalisation d’interfaces utilisateurs (Wordpress).</li>
          <li>Refonte sites vitrines (Wordpress).</li>
          <li>
            RDV clients pour élaboration du cahier des charges et suivi relation
            clients.
          </li>
        </ul>
      </div>
      <div className="exp2">
        <h4>
          Technicien Centrale d'approvisionnement - Carrefour SupplyChain |
          Evry(91)
        </h4>
        <h5>juin 2001 - août 2018</h5>
        <ul>
          <li>
            Gestion et suivi d’un portefeuille de 200 fournisseurs (analyse,
            calcul et validation des besoins).
          </li>
          <li>Coordinateur pour le projet de développement Bio.</li>
          <li>
            Mise en place de nouvelles méthodologies de travail à travers le
            projet Appro 360 (collaboration sur la mise en place d'un
            Dashboard).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
