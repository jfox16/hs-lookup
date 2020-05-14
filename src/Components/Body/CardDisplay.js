import React, {} from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './CardDisplay.css';

const columns = [
  {Header: 'Cost', accessor: 'cost', maxWidth: 45},
  {Header: 'Name', accessor: 'name', maxWidth: 150, style:{ 'whiteSpace': 'unset'}},
  {Header: 'Attack', accessor: 'attack', maxWidth: 60},
  {Header: 'Health', accessor: 'health', maxWidth: 60},
  {Header: 'Text', id: 'text', accessor: card => formatCardText(card.text), maxWidth: 600, style:{ 'whiteSpace': 'unset'}}
];

function formatCardText(text) {
  if (!text) return "";
  text = text.replace(/#|\[x\]|@.*/g, "");
  text = text.replace(/_|\\n/g, " ");
  return <div dangerouslySetInnerHTML={{__html: text}}/>;
}



function CardDisplay(props) {

  if (!props.cards) {
    return <div>Try entering a mana cost above! (e.g. 8) </div>
  }

  if (props.cards.length === 0) {
    return <div>No results found, try a different query.</div>
  }

  return (
    <div className="CardDisplay">
      <ReactTable data={props.cards} columns={columns} />
    </div>
  );
}

export default CardDisplay;