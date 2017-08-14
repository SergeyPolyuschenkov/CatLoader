import React, { Component } from 'react';
import Cat from './Cat.js';


import './Block.css';

class Block extends Component {
  render() {
  	if(!this.props.loadedContent.length) {
      return null;
    } else {
        return (
        	<div className="block">
            { this.props.loadedContent.map(function(array) {
                return  array.response.data.images.image.map(function(item) {
                    return <Cat key={item.id._text} image={item.url._text} />
                    })
                })
            }
          </div>        
        );
	   }
  }
}

export default Block;
