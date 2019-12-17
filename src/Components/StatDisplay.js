import React, { Component } from 'react';
import "./StatDisplay.css";

import StatSummary from './DataDisplays/StatSummary';
import StatHistogram from './DataDisplays/StatHistogram';
import KeywordDisplay from './DataDisplays/KeywordDisplay';

class StatDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldData: null,
      numCards: 0,
      meanAttack: 0,
      medAttack: 0,
      stdevAttack: 0,
      meanHealth: 0,
      medHealth: 0,
      stdevHealth: 0,
      dataBuckets: {},
    }

    this.updateBuckets = this.updateBuckets.bind(this);
  }

  updateStats(cardData) {

    if (!cardData) return;

    let minAttack = Number.POSITIVE_INFINITY;
    let maxAttack = Number.NEGATIVE_INFINITY;
    let minHealth = Number.POSITIVE_INFINITY;
    let maxHealth = Number.NEGATIVE_INFINITY;
    var _sumAttack = 0;
    var _sumHealth = 0;
    var _attackArray = [];
    var _healthArray = [];

    cardData.map((_card) => {
      if (isNaN(_card.attack)===false) {
        if (_card.attack < minAttack) {
          minAttack = _card.attack;
        }
        if (_card.attack > maxAttack) {
          maxAttack = _card.attack;
        }
        _sumAttack+=_card.attack;
        _attackArray.push(_card.attack);
      }
      else _attackArray.push(0);

      if (isNaN(_card.health)===false) {
        if (_card.health < minHealth) {
          minHealth = _card.health;
        }
        if (_card.health > maxHealth) {
          maxHealth = _card.health;
        }
        _sumHealth+=_card.health;
        _healthArray.push(_card.health);
      }
      else _healthArray.push(0);

      return _card;
    });

    var _meanAttack = _sumAttack/cardData.length;
    var _meanHealth = _sumHealth/cardData.length;

    // For Median
    _attackArray.sort((a, b) => a - b);
    _healthArray.sort((a, b) => a - b);

    var _midPoint = Math.floor(cardData.length/2);
    var _medAttack = _attackArray[_midPoint];
    var _medHealth = _healthArray[_midPoint];
    if (cardData.length%2 === 0) {
      _medAttack = (_attackArray[_midPoint-1]+_attackArray[_midPoint])/2;
      _medHealth = (_healthArray[_midPoint-1]+_healthArray[_midPoint])/2;
    }

    // For StDev
    var _sumDiffSqAttack = 0;
    _attackArray.map((_attack) => {
      _sumDiffSqAttack += Math.pow((_attack - _meanAttack), 2);
      return _attack;
    });
    var _stdevAttack = Math.sqrt(_sumDiffSqAttack/cardData.length);

    var _sumDiffSqHealth = 0;
    _healthArray.map((_health) => {
      _sumDiffSqHealth += Math.pow((_health - _meanHealth), 2);
      return _health;
    });
    var _stdevHealth = Math.sqrt(_sumDiffSqHealth/cardData.length);

    this.setState({
      oldData: cardData,
      numCards: cardData.length,

      minAttack: minAttack,
      maxAttack: maxAttack,
      meanAttack: _meanAttack,
      medAttack: _medAttack,
      stdevAttack: _stdevAttack,

      minHealth: minHealth,
      maxHealth: maxHealth,
      meanHealth: _meanHealth,
      medHealth: _medHealth,
      stdevHealth: _stdevHealth,
    });
  }

  updateBuckets(cardData) {

    if (!cardData) return;
    
    let attackCounts = {};
    let healthCounts = {};
    let keywordCounts = {};

    cardData.forEach(card => {

      // Add attack value
      if (card.attack === undefined) {
        card.attack = 0;
      }
      if (attackCounts[card.attack] === undefined) {
        attackCounts[card.attack] = 1;
      }
      else {
        attackCounts[card.attack] += 1;
      }

      // Add health value
      if (card.health === undefined) {
        card.health = 0;
      }
      if (healthCounts[card.health] === undefined) {
        healthCounts[card.health] = 1;
      }
      else {
        healthCounts[card.health] += 1;
      }

      // Add keyword
      if (card.mechanics !== undefined) {
        for (let i = 0; i < card.mechanics.length; i++) {
          let keyword = card.mechanics[i].name;
          if (keywordCounts[keyword] === undefined) {
            keywordCounts[keyword] = 1;
          }
          else {
            keywordCounts[keyword]++;
          }
        }
      }
    });

    let maxAttackCount = 0;
    for (let key in attackCounts) {
      if (attackCounts[key] > maxAttackCount) {
        maxAttackCount = attackCounts[key];
      }
    }
    let maxHealthCount = 0;
    for (let key in healthCounts) {
      if (healthCounts[key] > maxHealthCount) {
        maxHealthCount = healthCounts[key];
      }
    }

    let dataBuckets = {
      attackCounts: attackCounts,
      healthCounts: healthCounts,
      maxAttackCount: maxAttackCount,
      maxHealthCount: maxHealthCount,
      keywordCounts: keywordCounts
    }
    this.setState({ 
      dataBuckets: dataBuckets 
    });

    console.log(dataBuckets);
  }

  componentDidMount() {
    this.updateStats(this.props.cardData);
    this.updateBuckets(this.props.cardData);
  }

  componentDidUpdate() {
    if (this.props.cardData !== this.state.oldData) {
      this.updateStats(this.props.cardData);
      this.updateBuckets(this.props.cardData);
    }
  }

  render() {
    if (!this.props.cardData || this.props.cardData.length === 0) {
      return (
        <></>
      );
    }
    return (
      <div className="StatDisplay">
        <h2>Quick Look</h2>
        <p className="card-count">{this.state.numCards} cards</p>


        <div className="elements">
          <div>
            <h2>Attack</h2>
            <StatSummary 
              mean={this.state.meanAttack}
              median={this.state.medAttack}
              stdev={this.state.stdevAttack}
            />
            <StatHistogram 
              label="Attack" 
              color='#FEDC42'
              data={this.state.dataBuckets.attackCounts}
              minX={this.state.minAttack}
              maxX={this.state.maxAttack}
              maxY={this.state.dataBuckets.maxAttackCount}
            />
          </div>

          <div>
            <h2>Health</h2>
            <StatSummary 
              mean={this.state.meanHealth}
              median={this.state.medHealth}
              stdev={this.state.stdevHealth}
            />
            <StatHistogram 
              label="Health"
              color='#FE4756'
              data={this.state.dataBuckets.healthCounts}
              minX={this.state.minHealth}
              maxX={this.state.maxHealth}
              maxY={this.state.dataBuckets.maxHealthCount}
            />
          </div>

        </div>

        <KeywordDisplay 
          data={this.state.dataBuckets.keywordCounts}
          numCards={this.state.numCards}
        />
      </div>
    );
  }
}

export default StatDisplay;