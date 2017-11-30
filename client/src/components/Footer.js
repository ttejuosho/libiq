import React, { Component } from "react";
import '../App.css';


class Footer extends Component{
    state={

    };


    render(){
        return(
            <div className="footer">
            <hr />
               <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Other Projects</a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="https://res-create.herokuapp.com" target="_blank" rel='noreferrer noopener'>res.Create</a>
                      <a class="dropdown-item" href="https://zaynaib.github.io/Bootstrap-Portfolio/" target="_blank" rel='noreferrer noopener'>Ola</a>
                      <a class="dropdown-item" href="https://ttejuosho.github.io/portfolio/index.html" target="_blank" rel='noreferrer noopener'>Taiwo</a>
                     
                    </div>
                  </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/ttejuosho/libiq" target="_blank">github</a>
                    </li>
                </ul>
                <hr />
                Copyright &copy; 2017 All rights reserved. | Privacy Policy | Terms of Use
            </div>
        )
}
}

export default Footer;