// Data sharing example with "lifting data up"

import React from 'react';
import SearchInput from "./SearchInput";
import DataTable from "./DataTable";

class FilteredTable extends React.Component {
  constructor() {
    super();
    this.state = {
      filter : "",
      handleSearchChange: this.handleSearchChange.bind(this)
    }
  }
  handleSearchChange(e){
    this.setState({
      filter: e.target.value.toLowerCase()
    })
  }

  render(){
    return(
      <div>
        <SearchInput onChangeHandler = {this.state.handleSearchChange}/>
        <DataTable filterString={this.state.filter}/>
      </div>
    )
  }
}

export default FilteredTable;