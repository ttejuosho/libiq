import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import '../App.css';
import '../animate.css';
import API from '../utils/API';

class Book2 extends React.Component{
	state ={
		books:[],
		bookTitle:"",
		dueDate: "",
		user:""
	};


	componentDidMount(){
		//API call in here
		console.log("component mounted")
		//Once the page is rendered I want to load up the users books

	}


	handleInputChange = (event) =>{
		const {name, value} = event.target;
		this.setState({
			[name]:value
		});

	}

	handleFormSubmit = (event) =>{
		let app = this
		//When the click on submit the can add a new book
		//Use API.newBook or something

		//everytime the form is submitted we will show a pop up of book title
		alert('A name was submitted: ' + this.state.bookTitle);

		//once the  book
		let bookObj = {title:this.state.bookTitle, date:this.state.dueDate,userId:this.state.user};

		//user creates a book
		API.createBooks(bookObj)
			.then(function(res){
					
					console.log("created a book", res)
					// then I want to reset the books array
					// get all the book that user has

					API.getBooks(res.data._id)
					.then(function (res){

						
						app.setState({
							books:res.data

						})
						console.log("resetting the state", app.state.books)

					}).bind(app)

				})
			

		//make an API call to create a new book for the user
		 event.preventDefault();

	}

	

	/*
		function that will do these things
		This page will show the books
		This page will display their due dates

	*/

	render(){
		return(
				<div>
					<label>
						User Id
					</label>
					<input type= "text" name="user" value ={this.state.user} onChange={this.handleInputChange}/>

					<label>
						Book Title
					</label>
			   		<input type="text" name="bookTitle" value={this.state.bookTitle} onChange={this.handleInputChange} />

			   		<label>
			   			Book Due
			   		</label>
			   		<input type="text" name="dueDate" value={this.state.dueDate} onChange={this.handleInputChange} />
			   		
			   		<input type="submit" value="Submit" onClick ={this.handleFormSubmit} />

			   	{/* Below the form I want to display the books with thir due dates*/}
			   </div>


			)
	}
}

export default Book2;