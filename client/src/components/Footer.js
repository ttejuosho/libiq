import React, { Component } from "react";
import '../App.css';


class Footer extends Component{
    state={

    };


    render(){
        return(
            <div className="footer">
            <div className="container">
               <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Other Projects</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="https://res-create.herokuapp.com" target="_blank" rel='noreferrer noopener'>res.Create</a>
                      <a className="dropdown-item" href="https://zaynaib.github.io/Bootstrap-Portfolio/" target="_blank" rel='noreferrer noopener'>Ola</a>
                      <a className="dropdown-item" href="https://ttejuosho.github.io/portfolio/index.html" target="_blank" rel='noreferrer noopener'>Taiwo</a>
                     
                    </div>
                  </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/ttejuosho/libiq" target="_blank" rel='noreferrer noopener'>github</a>
                    </li>
                </ul>
                <hr />
                Copyright &copy; 2017 All rights reserved. | Privacy Policy | Terms of Use
            </div>
            </div>
        )
}
}

export default Footer;