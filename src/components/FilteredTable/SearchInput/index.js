import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return(
      <div>
        <input onChange={this.props.onChangeHandler}/>
      </div>
    )
  }
}

SearchInput.propTypes = {
  onChangeHandler : PropTypes.func.isRequired
};

export default SearchInput;