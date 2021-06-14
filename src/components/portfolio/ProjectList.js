import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: 'all' },
      { id: 2, value: 'javascript' },
      { id: 3, value: 'css' },
      { id: 4, value: 'react' },
      { id: 5, value: 'php' },
      { id: 6, value: 'wordpress' },
    ],
    selectedRadio: 'all',
  };
  // Animation bouton radio //
  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
