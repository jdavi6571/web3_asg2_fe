import React, { Component } from 'react';
// eslint-disable-next-line 
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import BreadCrumb from '../components/BreadCrumb.js';
import '../App.css';

class Home extends Component {
constructor(props) {
 super(props);
  this.state = {home: [] };
  }

render() {
 return (
     <div>
<section class="hero is-indigo is-medium">
  <div class="hero-body">
    <div class="container">
   <div class="columns is-narrow-mobile">
  <div class="column is-10">
<Link to={ {pathname: "/portfolio"}}><button class="button is-crimsonsky is-large is-fullwidth">Browse Portflio </button></Link>
      </div>
      
</div>
   <div class="columns is-narrow-mobile">
 <div class="column is-three-fifths is-offset-one-fifth">
        <Link to={ {pathname: "/companies"}}><button class="button is-cotton is-large is-fullwidth">Browse Companies </button></Link>
      </div>
      <br/>
</div>
   <div class="columns is-narrow-mobile">
 <div class="column is-three-fifths is-offset-1">
       <Link  to={ {pathname: "/stocks"}}><button class="button is-leaf is-large is-fullwidth">Stock Visualizer </button></Link>
      </div>
</div>

   <div class="columns is-narrow-mobile">
 <div class="column is-two-thirds is-offset-3">
       <Link  to={ {pathname: "/aboutus"}}><button class="button is-powderblue is-large is-fullwidth">About Us </button></Link>
      </div>
      
</div>
<div class="columns is-hidden-mobile">
  <div class="column is-4 is-offset-8">

  <img src="New Project.png" alt="homepage" class="imageEdit"/></div>

</div>

    </div>
  </div>
</section>

     </div>

       );
    }
}

export default Home;