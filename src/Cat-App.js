import React, { Component } from 'react';
import { connect } from 'react-redux';
import Block from './Block.js';
import fetch from 'node-fetch';
import convert from 'xml-js';
import Loading from 'react-loading-spinner';
import InfiniteScroll from 'react-infinite-scroller';
import 'react-loading-spinner/src/css/index.css';

import './App.css';


class App extends Component {

  render() {
    return (

      <InfiniteScroll
          pageStart={0}
          loadMore={this.props.loadData}
          hasMore={true}
          loader={<div className=''></div>}
      >
          <div className="App">
            <div className='base'>
              <Loading isLoading={this.props.catStore.loading} loadingClassName='defloading'>
                <Block loadedContent={this.props.catStore.data} />
              </Loading>
            </div>
          </div>
      </InfiniteScroll>
    );
  }
}

export default connect(

 state => ({
  catStore: state
 }),

 dispatch => ({
    loadData: () => {
      const asyncGetCats = () => {
        return dispatch => {
          
          fetch("http://thecatapi.com/api/images/get?format=xml&results_per_page=20")
            .then(response => response.text())
            .then(body => {
              var result_json = convert.xml2json(body, {compact: true, spaces: 4, ignoreDeclaration: true});
              var result = JSON.parse(result_json);
              dispatch({ type: 'ADD_URLS', payload: result, loading: false });
            });


        }
      }
      dispatch(asyncGetCats());
    },
 }),

)(App);
