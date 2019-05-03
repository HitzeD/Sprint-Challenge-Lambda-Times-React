import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      selected: 'all',
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelected = (tab) => {
    this.setState({
      selected: tab
    })
    console.log(this.state.selected)
  };

  filterCards = () => {
    console.log("filteredcards", this.state.cards)
    if(this.state.selected === 'all'){
      return cardData;
    } else {
      console.log('here');
      return cardData.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs selectTabHandler={this.changeSelected} selectedTab={this.state.selected} tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
