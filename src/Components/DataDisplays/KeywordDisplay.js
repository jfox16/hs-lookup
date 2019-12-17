import React, { Component } from 'react';
import './KeywordDisplay.css';

class KeywordDisplay extends Component {

  keywordsToDisplay = [
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
    console.log(this.props);
    if (!this.props.data) return <></>;
    let keywordCounts = this.props.data;
    let keys = Object.keys(keywordCounts).sort();

    let keywordDivs = keys.map((key) => {
      if (this.keywordsToDisplay.includes(key)) {
        let percentage = ((keywordCounts[key] / this.props.numCards)*100).toFixed(1);
        return <div className="keywordDiv" key={key + percentage}>
          <p>{key}</p>
          <h3>{percentage + "%"}</h3>
        </div>
      }
    });

    return (
      <div className="KeywordDisplay">
        {keywordDivs}
      </div>
    );
  }
}

export default KeywordDisplay;