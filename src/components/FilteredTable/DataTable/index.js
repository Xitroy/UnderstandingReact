import React from 'react';
import PropTypes from 'prop-types';

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [
        {
          "id": "1",
          "name": "Name_1"
        },
        {
          "id": "2",
          "name": "Name_2"
        },
        {
          "id": "3",
          "name": "Name_3"
        },
        {
          "id": "4",
          "name": "Name_11"
        }
      ],
    };
  }

  render() {
    const relevenat = this.state.itemList.filter((item)=>{
      return item.name.toLowerCase().includes(this.props.filterString)});
    return (
      <div>
        {relevenat.map((item)=>{return <div>{item.name}</div>})}
      </div>
    )
  }
}

DataTable.propTypes = {
  filterString : PropTypes.string.isRequired
};
export default DataTable;