import React, { Component } from 'react';
import './App.css';

const INFO_URL = "https://omgvamp-hearthstone-v1.p.mashape.com/info";
const CARD_URL = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/Minion?collectible=1";
const KEY = "uNAQaMK2G4mshC4QfbV2n3OPMm22p1H8aOZjsn7hb60RjWLobf";
const IS_WILD = "FALSE"

class App extends Component {
  render() {
    return (
      <div>
        <div class="tab-container">
          <h1 class="title">Look Up Cards by Mana Cost</h1>
          <CardLookup />
        </div>
      </div>
      
    );
  }
}





class CardLookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoData: null,
      cardData: null,
      filteredCardData: null,

      // Filters
      costFilter: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  /* fetchData fetches infoData and cardData and puts them in state.
  cardData is an array of all cards from the Hearthstone API.
  infoData contains info on the game, including standard-legal sets. */
  fetchData = async () => {
    let _infoData = await fetch(INFO_URL, {
      headers: {"X-Mashape-Key": KEY},
    });
    let _infoDataJson = await _infoData.json();

    let _cardData = await fetch(CARD_URL, {
      headers: {"X-Mashape-Key": KEY},
    });
    let _cardDataJson = await _cardData.json();

    this.setState({
      infoData: _infoDataJson,
      cardData: _cardDataJson,
    });
  }

  /* handleSubmit is called when the big Look Up button is pressed. 
  It filters the cards from state.cardData and makes new components
  using the filtered set of cards, then puts those components in state. */
  handleSubmit(e) {
    e.preventDefault();

    let _filteredCardData = null;
    let _standardSets = null;
    if (this.state.cardData && this.state.infoData) {
      _filteredCardData = [];
      _standardSets = this.state.infoData.standard;

      console.log(this.state.costFilter);

      this.state.cardData.map((_card) => {
        let _setMatch = (IS_WILD === true || (_standardSets.indexOf(_card.cardSet) > -1));
        let _costMatch = (
          this.state.costFilter === "" 
          || this.state.costFilter === null
          || this.state.costFilter == _card.cost);

        if (_setMatch && _costMatch) {
          _filteredCardData.push(_card);
        }
      });
    }

    this.setState({
      filteredCardData: _filteredCardData,
    })
  }

  handleClearForm(e) {
    // not done yet
  }

  handleCostChange(e) {
    let _cost = (e.target.value);
    this.setState({
      costFilter: _cost,
    })
  }

  render() {
    if (!this.state.infoData || !this.state.cardData) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <form class="form-container" onSubmit={this.handleSubmit}>
          <Input label="MANA" type="number" placeHolder="Any" handleChange={this.handleCostChange} />
          <div class="spacer-10px" />
          <Button label="Look Up" handleClick={this.handleSubmit} />
        </form>
        <div class="spacer-25px" />
        <div class="spacer-10px" />
        <StatsDisplay data={this.state.filteredCardData} />
        <div class="spacer-10px" />
        <CardDisplay data={this.state.filteredCardData} />
      </div>
    );
  }
}





const Input = (props) => {
  return (
    <div class="input-field">
      <p class="label">{props.label}</p>
      <input 
        type={props.type} 
        placeholder={props.placeHolder}
        onChange={props.handleChange} />
    </div>
  );
}





const Button = (props) => {
  return (
    <button 
      class="lookup-button" 
      onClick={props.handleClick}>
      {props.label}
    </button>
  );
}





class StatsDisplay extends Component {

  constructor(props) {
    super(props);
    this.data = props.data;
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
    this.updateStats(this.props.data);
  }

  componentDidUpdate() {
    if (this.props.data !== this.state.oldData) {
      this.updateStats(this.props.data);
    }
  }

  render() {
    if (!this.props.data || this.props.data.length === 0) {
      return (
        <div/>
      );
    }
    return (
      <div>
        <div class="stats-display">
          <h1>{this.state.numCards} cards</h1>
        </div>
        <div class="spacer-10px"/>
        <div class="stats-display">
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





class CardDisplay extends Component {

  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    if (!this.props.data) {
      return (
        <div></div>
      );
    }

    if (this.props.data.length === 0) {
      return (
        <div>No results found.</div>
      );
    }

    return (
      <div>
        <div class="card-display">
          {this.props.data.map((_card) => (
            <div key={_card.cardId} class="card-container">
              <img src={_card.img} alt={_card.name}></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}





export default App;
