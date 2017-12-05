import React, { Component } from "react";
import '../App.css';


class DueBooks extends Component {


    render(){
     

            return (
                <div>
                 <ul>
    
                    { 
                        this.props.savedBooks.map((item,i) => {
                            return (
                                
                                <div key={i} className="SavedBooksDiv">
                                
                                <li>
                                
                                    <img className="SavedBookImg" src={item.image} alt=""/>
                               
                                <div className="SavedBookInfo">
                                    <p>{item.title}</p>
                                    <p>{item.author}</p>         
                                    
                                </div>
                                    <br/><br/>
                                </li>
                                </div>
                                
                            )
                    })
                    }
                 </ul>
                </div>
            )
       
        
    }
}
export default DueBooks;