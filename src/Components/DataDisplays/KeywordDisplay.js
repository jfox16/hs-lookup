import React, { Component } from 'react';
import './KeywordDisplay.css';

class KeywordDisplay extends Component {

  keywordsToDisplay = [
    "Battlecry",
    "Deathrattle",
    "Divine Shield",
    "Taunt",
    "Reborn",
    "Rush",
    "Charge",
    "Lifesteal",
    "Poisonous",
    "Spell Damage",
  ]

  render() {

    if (!this.props.keywordCounts) return <></>;

    let keywordCounts = this.props.keywordCounts;
    let keywordsToDisplay = this.keywordsToDisplay.filter((keyword) => {
      return (keywordCounts[keyword] !== undefined);
    });
    let keywordDivs = keywordsToDisplay.map((keyword) => {
      let count = keywordCounts[keyword];
      let percentage = ((count / this.props.numCards)*100).toFixed(1);
      return <div className="keywordDiv" key={keyword + percentage}>
        <p>{keyword}</p>
        <h3>{percentage + "%"}</h3>
      </div>
    });

    return (
      <div className="KeywordDisplay">
        {keywordDivs}
      </div>
    );
  }
}

export default KeywordDisplay;