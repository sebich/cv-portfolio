import React, { Component } from 'react';
import ProgressBar from './ProgessBar';

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Html/Css', xp: 1.5 },
      { id: 2, value: 'Javascript', xp: 1.5 },
      { id: 3, value: 'Node.js', xp: 1 },
      { id: 4, value: 'React', xp: 0.2 },
      { id: 5, value: 'Bootstrap', xp: 0.3 },
      { id: 6, value: 'Bulma', xp: 0.3 },
      { id: 7, value: 'Git/Github', xp: 1 },
      { id: 8, value: 'Wordpress', xp: 0.3 },
    ],
  };
  render() {
    let { languages } = this.state;

    return (
      <div className="languages">
        <ProgressBar
          languages={languages}
          className="languagesDispaly"
          title="competences"
        />
      </div>
    );
  }
}

export default Languages;
