import React from 'react';
import './index.css';

export default React.createClass({
  render () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    );
  }
});
