
import {connect} from 'react-redux'
import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EquestrianNav from './EquestrianNav'


import sweetie from '../../images/sweetie.jpg'

class EquestrianPage extends Component {
 



    render() {

        return (
            <div >

                <EquestrianNav />
               
                <div id="equestrian-bg">
                     <div class="text-eq">
                    <h1 id="comming">Coming Soon...</h1>
                    <button type="button" class="btn btn-dark button-back" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>
                    </div>
                </div>


          


            </div>
        );
    }

}

export default EquestrianPage;


 
  

