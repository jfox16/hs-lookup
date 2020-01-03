import React, {Component} from 'react';

import './FilterForm.css';

class FilterForm extends Component {

  constructor() {
    super();

    this.state = {
      filters: {
        wildOrStandard: "Standard",
        cost: null,
        class: null,
        includeNeutral: false,
        race: null,
        rarity: null
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setIncludeNeutral = this.setIncludeNeutral.bind(this);
  }

  handleChange(e, key) {
    let value = e.target.value;
    if (value.length === 0) {
      value = null;
    }
    // console.log("Changing " + key + " to " + value);
    let filters = this.state.filters;
    if (key in filters) {
      filters[key] = value;
      this.setState({
        filters: filters
      });
    }
  }

  setIncludeNeutral(includeNeutral) {
    let filters = this.state.filters;
    filters["includeNeutral"] = includeNeutral;
    this.setState({
      filters: filters
    })
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
          /> WILD
        </label>
        <label>
          <input
            type="radio"
            name="wild-or-standard"
            value="Standard"
            onChange={(e) => {this.handleChange(e, "wildOrStandard")}}
            checked={this.state.filters.wildOrStandard === "Standard"}
          /> STANDARD
        </label>
      </div>
    );}

  handleSubmit(e) {
    e.preventDefault() // Keep page from reloading when form is submitted
    this.props.filterData(this.state.filters);
  }

  render() {
    return <form className="FilterForm">
      <h2>Filters</h2>
      <div style={{height:"10px"}}></div>
      {this.renderWildOrStandardRadio()}
      <CostInput handleChange={this.handleChange} />
      <ClassInput handleChange={this.handleChange} classes={this.props.infoData.classes} />
      <IncludeNeutralInput setIncludeNeutral={this.setIncludeNeutral} />
      <RaceInput handleChange={this.handleChange} races={this.props.infoData.races} />
      <RarityInput handleChange={this.handleChange} rarities={this.props.infoData.qualities} />
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

function ClassInput(props) {
  const classesToHide = ["Death Knight", "Dream"];
  for (let i = 0; i < classesToHide.length; i++) {
    let index = props.classes.indexOf(classesToHide[i]);
    if (index > -1) {
      props.classes.splice(index, 1);
    }
  }
  return (
    <div className="input-field">
      <p>CLASS</p>
      <select defaultValue="" onChange={(e) => {props.handleChange(e, "class")}}>
        <option value="">Any</option>
        {props.classes.map((_class) => {
          return <option value={_class} key={_class}>{_class}</option>
        })}
      </select>
    </div>
  );
}

function IncludeNeutralInput(props) {
  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          onChange={(e) => {
            props.setIncludeNeutral(e.target.checked)}
          } 
        /> Include neutral minions (for Discover)
      </label>
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

function RarityInput(props) {
  return (
    <div className="input-field">
      <p>RARITY</p>
      <select defaultValue="" onChange={(e) => {props.handleChange(e, "rarity")}}>
        <option value="">Any</option>
        {props.rarities.map((rarity) => {
          return <option value={rarity} key={rarity}>{rarity}</option>
        })}
      </select>
    </div>
  );
}

export default FilterForm;