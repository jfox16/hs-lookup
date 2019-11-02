import React, {Component} from 'react';
import './CardDisplay.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CardDisplay extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    if (this.props.data === null) {
      return (
        <div>Try entering a mana cost above! (e.g. 8) </div>
      );
    }

    if (this.props.data.length === 0) {
      return (
        <div>No results found.</div>
      );
    }
    

    const columns = [
      {Header: 'Cost', accessor: 'cost', maxWidth: 50},
      {Header: 'Name', accessor: 'name', maxWidth: 150, style:{ 'whiteSpace': 'unset'}},
      {Header: 'Attack', accessor: 'attack', maxWidth: 60},
      {Header: 'Health', accessor: 'health', maxWidth: 60},
      { Header: 'Text', id: 'text', accessor: card => this.formatCardText(card.text), maxWidth: 600, style:{ 'whiteSpace': 'unset'}},
    ];

    // const displayRows = this.props.data.map((card) => {
    //   return <tr key={card.cardId}>
    //     <td>{card.cost}</td>
    //     <td>{card.name}</td>
    //     <td>{this.formatCardText(card.text)}</td>
    //     <td>{card.attack}</td>
    //     <td>{card.health}</td>
    //   </tr>
    // });

    return (
      <div className="CardDisplay">
        <ReactTable data={this.props.data} columns={columns} />
      </div>
    );
  }

  formatCardText(text) {
    if (!text) return "";
    // remove tags
    text = text.replace(/<.*?>|#|\[x\]|@.*/g, "");
    // replace weird characters with a space
    text = text.replace(/_|\\n/g, " ")
    return text;
  }
}

export default CardDisplay;