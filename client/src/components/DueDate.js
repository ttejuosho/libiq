import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import '../App.css';
import '../animate.css';
import API from '../utils/API';

window.moment = moment;
window.axios =axios;

class DueBooks extends React.Component{
    render(){
        return(
            <div className="due-books">
                <h1>Shopping List for  Me </h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>

            </div>
        )
    }
}
export default DueBooks;