import React, { Component } from 'react';
import "./StatDisplay.css";

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
    }
  }

  updateStats(cardData) {
    if (!cardData) return;

    var _sumAttack = 0;
    var _sumHealth = 0;
    var _attackArray = [];
    var _healthArray = [];

    cardData.map((_card) => {
      if (isNaN(_card.attack)===false) {
        _sumAttack+=_card.attack;
        _attackArray.push(_card.attack);
      }
      else _attackArray.push(0);

      if (isNaN(_card.health)===false) {
        _sumHealth+=_card.health;
        _healthArray.push(_card.health);
      }
      else _healthArray.push(0);
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
    });
    var _stdevAttack = Math.sqrt(_sumDiffSqAttack/cardData.length);

    var _sumDiffSqHealth = 0;
    _healthArray.map((_health) => {
      _sumDiffSqHealth += Math.pow((_health - _meanHealth), 2);
    });
    var _stdevHealth = Math.sqrt(_sumDiffSqHealth/cardData.length);

    this.setState({
      oldData: cardData,
      numCards: cardData.length,
      meanAttack: _meanAttack,
      medAttack: _medAttack,
      stdevAttack: _stdevAttack,
      meanHealth: _meanHealth,
      medHealth: _medHealth,
      stdevHealth: _stdevHealth,
    });
  }

  componentDidMount() {
    this.updateStats(this.props.cardData);
  }

  componentDidUpdate() {
    if (this.props.cardData !== this.state.oldData) {
      this.updateStats(this.props.cardData);
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
        <div>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th> Mean </th>
                <th> Median </th>
                <th> StDev </th>
              </tr>
              <tr>
                <th>Attack:</th>
                <td>{this.state.meanAttack.toFixed(2)}</td>
                <td>{this.state.medAttack.toFixed(2)}</td>
                <td>{this.state.stdevAttack.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Health:</th>
                <td>{this.state.meanHealth.toFixed(2)}</td>
                <td>{this.state.medHealth.toFixed(2)}</td>
                <td>{this.state.stdevHealth.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StatDisplay;