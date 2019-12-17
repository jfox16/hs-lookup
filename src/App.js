import React, { Component } from 'react';
import './App.css';

import ClipLoader from 'react-spinners/ClipLoader';

// import react-vis css
import '../node_modules/react-vis/dist/style.css';

import Footer from './Components/Footer';
import FilterForm from './Components/FilterForm';
import CardDisplay from './Components/CardDisplay';
import StatDisplay from './Components/StatDisplay';

const INFO_URL = "https://omgvamp-hearthstone-v1.p.mashape.com/info";
const CARD_URL = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/Minion?collectible=1";
const KEY = "uNAQaMK2G4mshC4QfbV2n3OPMm22p1H8aOZjsn7hb60RjWLobf";

class App extends Component {

  constructor() {
    super();
    this.state = {
      infoData: null,
      cardData: null,
      filteredCardData: null,
      filterDescription: '',
    };

    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  // Fetches info and card data from the API, then stores them in this.state.
  fetchData = async() => {

    let infoData = await (await fetch(INFO_URL, {
      headers: {"X-Mashape-Key": KEY},
    })).json();

    let cardData = await (await fetch(CARD_URL, {
      headers: {"X-Mashape-Key": KEY},
    })).json();

    this.setState({
      infoData: infoData,
      cardData: cardData
    });

    let filters = {
      wildOrStandard: "Standard",
      cost: null,
      class: null,
      race: null,
      rarity: null,
    }

    // TODO: remove for build version
    console.log(this.state);
    this.filterData(filters);
  }

  // Filters cardData through specified filters. The result is stored in filteredCardData.
  filterData(filters) {

    if (!this.state.infoData || !this.state.cardData) return;

    let filteredCardData = this.state.cardData.slice(); // make a copy of cardData to work with

    // Filter by wild/standard
    if (filters.wildOrStandard === "Standard") {
      const standardSets = this.state.infoData.standard;
      filteredCardData = filteredCardData.filter((card) => {
        return standardSets.includes(card.cardSet);
      });
    }

    // Filter by cost
    if (filters.cost !== null) {
      filteredCardData = filteredCardData.filter((card) => {
        return (card.cost === Number(filters.cost));
      });
    }

    // Filter by class
    if (filters.class !== null) {
      filteredCardData = filteredCardData.filter((card) => {
        return (card.playerClass === filters.class);
      });
    }

    // Filter by race
    if (filters.race !== null) {
      filteredCardData = filteredCardData.filter((card) => {
        return (card.race === filters.race);
      });
    }

    // Filter by rarity
    if (filters.rarity !== null) {
      filteredCardData = filteredCardData.filter((card) => {
        return (card.rarity === filters.rarity);
      });
    }

    let filterDescription = this.getFilterDescription(filters);
    this.setState({
      filteredCardData: filteredCardData,
      filterDescription: filterDescription
    });
  }

  getFilterDescription(filters) {
    let filterDescription = "";
    if (filters.cost) {
      filterDescription += filters.cost + "-cost ";
    }
    if (filters.rarity) {
      filterDescription += filters.rarity + " ";
    }
    if (filters.class) {
      filterDescription += filters.class + " ";
    }
    if (filters.race) {
      filterDescription += filters.race + "s ";
    }
    else {
      filterDescription += "Minions ";
    }
    if (filters.wildOrStandard) {
      filterDescription += "in " + filters.wildOrStandard;
    }
    return filterDescription;
  }

  renderBody() {
    if (this.state.infoData && this.state.cardData) {
      return (
        <>
        <FilterForm 
          filterData={this.filterData} 
          infoData={this.state.infoData} />
        <StatDisplay 
          cardData={this.state.filteredCardData} 
          dataBuckets={this.state.dataBuckets} 
          filterDescription={this.state.filterDescription}/>
        <CardDisplay cardData={this.state.filteredCardData} />
        </>
      );
    }
    else {
      return <Loader />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="title-div">
          <h1>Hearthstone Lookup</h1>
        </div>
        {this.renderBody()}
        <Footer />
      </div>
    );
  }
}



function Loader(props) {
  return (
    <div className="Loader">
      <div>
        <ClipLoader 
          color={'#d7ccc8'}
        />
      </div>
    </div>
  );
}









export default App;
