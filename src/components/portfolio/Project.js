import React, { Component } from 'react';

class Project extends Component {
  state = {
    showInfo: false, // masque popup par défaut (état par défaut)
  };

  /* animation Popup */
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img
          src={picture}
          alt="page d'accueil du projet"
          onClick={this.handleInfo}
        />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {/* Popup */}
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="nouvelle fenêtre vers l'application"
                    className="button"
                  >
                    Voir
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
        {/* Popup end */}
      </div>
    );
  }
}

export default Project;
