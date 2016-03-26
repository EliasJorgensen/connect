import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Room from 'components/Room';

class RoomContainer extends Component {
  constructor () {
    super();
    // use PureRenderMixin
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render () {
    <Room/>
  }
}

export default RoomContainer;
