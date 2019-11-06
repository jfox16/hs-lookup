import React, {Component} from 'react';

import './FilterForm.css';

class FilterForm extends Component {

  rarities = ["Common", "Rare", "Epic", "Legendary"]

  constructor() {
    super();

    this.state = {
      filters: {
        wildOrStandard: "Standard",
        cost: null,
        race: null,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, key) {
    let value = e.target.value;
    if (value.length === 0) {
      value = null;
    }
    console.log("changing " + key + " to " + value);
    let filters = this.state.filters;
    if (key in filters) {
      filters[key] = value;
      this.setState({
        filters: filters
      });
    }
  }

  renderWildOrStandardRadio() {
    return (
      <div className="">
        <label>
          <input
            type="radio"
            name="wild-or-standard"
            value="Wild"
            onChange={(e) => {this.handleChange(e, "wildOrStandard")}}
            checked={this.state.filters.wildOrStandard === "Wild"}
          />
          WILD
        </label>
        <label>
          <input
            type="radio"
            name="wild-or-standard"
            value="Standard"
            onChange={(e) => {this.handleChange(e, "wildOrStandard")}}
            checked={this.state.filters.wildOrStandard === "Standard"}
          />
          STANDARD
        </label>
      </div>
    );}

  handleSubmit(e) {
    e.preventDefault() // Keep page from reloading when form is submitted
    this.props.filterData(this.state.filters);
  }

  render() {
    return <form className="FilterForm">
      {this.renderWildOrStandardRadio()}
      <CostInput handleChange={this.handleChange} />
      <RaceInput handleChange={this.handleChange} races={this.props.infoData.races} />
      <button className="lookup-button" onClick={this.handleSubmit}>Look Up</button>
      {/* <input className="reset-button" type="reset" value="Reset"/> */}
    </form>
  }
}



// Some functional components

function CostInput(props) {
  return (
    <div className="input-field">
      <p>MANA</p>
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Any (e.g. 4)"
        onChange={(e) => {props.handleChange(e, "cost")}}
      />
    </div>
  );
}

function RaceInput(props) {
  return (
    <div className="input-field">
      <p>RACE</p>
      <select defaultValue="" onChange={(e) => {props.handleChange(e, "race")}}>
        <option value="">Any</option>
        {props.races.map((race) => {
          return <option value={race} key={race}>{race}</option>
        })}
      </select>
    </div>
  );
}

export default FilterForm;