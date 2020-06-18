
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import horse from '../horse.png'
class LandingPage extends Component {
 



    render() {

        return (
            <div className="App">

            <div class="wrapper">
                <img className="landing-page-img" src={horse}/>
                <img className="landing-page-img-2" src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <h1 id="landing-title">Bronte Sewell</h1>
             
                <h2 id="equestrian-link"  onClick={()=> this.props.history.push('/equestrian')}>Equestrian</h2>
        
                <h2 id="web-dev-link" onClick={()=> this.props.history.push('/web-development')}>Web Development and Design</h2>
            </div>
        </div>
        );
    }

}

export default LandingPage;


 
  

