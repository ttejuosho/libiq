import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import '../App.css';
import '../animate.css';
import API from '../utils/API';
import {KawaiiPlanet} from 'react-kawaii';

window.moment = moment;
window.axios =axios;

class DuePage extends React.Component{
    
       state={
        book:{},
        bookId:""
       }
    

    componentDidMount() {

    
      }
      
    render(){
    }
}
export default DuePage;

