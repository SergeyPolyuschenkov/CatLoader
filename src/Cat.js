import React, { Component } from 'react';

import './Cat.css';

class Cat extends Component {
  render() {
    return (
      <div className="cat">
          <img src={this.props.image} className="cat_img" alt=""/>
      </div>
    );
  }
}

export default Cat;
