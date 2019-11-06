import React, {Component} from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './CardDisplay.css';

class CardDisplay extends Component {

  columns = [
    {Header: 'Cost', accessor: 'cost', maxWidth: 45},
    {Header: 'Name', accessor: 'name', maxWidth: 150, style:{ 'whiteSpace': 'unset'}},
    {Header: 'Attack', accessor: 'attack', maxWidth: 60},
    {Header: 'Health', accessor: 'health', maxWidth: 60},
    { Header: 'Text', id: 'text', accessor: card => this.formatCardText(card.text), maxWidth: 600, style:{ 'whiteSpace': 'unset'}}
  ]

  formatCardText(text) {
    if (!text) return "";
    text = text.replace(/#|\[x\]|@.*/g, "");
    text = text.replace(/_|\\n/g, " ");
    return <div dangerouslySetInnerHTML={{__html: text}}/>;
  }

  renderNull() {
    return (
      <div>Try entering a mana cost above! (e.g. 8) </div>
    );
  }

  renderEmpty() {
    return (
      <div>No results found.</div>
    );
  }

  renderCards() {
    return (
      <div className="CardDisplay">
        <ReactTable data={this.props.cardData} columns={this.columns} />
      </div>
    );
  }

  render() {
    if (this.props.cardData === null) {
      return this.renderNull();
    }
    if (this.props.cardData.length === 0) {
      return this.renderEmpty();
    }
    return this.renderCards();
  }
}

export default CardDisplay;