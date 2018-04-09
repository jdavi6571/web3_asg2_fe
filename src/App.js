import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderApp from './components/HeaderApp.js';
import AboutUs from './containers/AboutUs.js';
import Home from './containers/Home.js';
import BrowseCompanies from './containers/BrowseCompanies.js';
import SingleCompany from './containers/SingleCompany.js';
import BrowsePortfolio from './containers/BrowsePortfolio.js';
import StockVisualizer from './containers/StockVisualizer.js';


class App extends Component {
  render() {
    return (
      <div>
      <HeaderApp />
      <main >
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/companies" exact component={BrowseCompanies}/>
        <Route path = "/company/:symbol" exact component={SingleCompany}/>
        <Route path ="/portfolio" exact component={BrowsePortfolio}/>
        <Route path="/stocks" exact component={StockVisualizer}/>
      </main>
      </div>
    );
  }
}

export default App;
