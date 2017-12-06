import React, { Component } from "react";
import '../App.css';


class Footer extends Component {


    render() {
        return (
            <div className="footer">
                <div className="container">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active"
                                target="_blank" rel='noreferrer noopener'
                                href="https://medium.com/level-up-web/best-javascript-books-in-2017-72bf39d0ca73">Javascript Books to read</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                target="_blank" rel='noreferrer noopener'
                                href="https://zenagiwa.wordpress.com/page/11/">Ola's Blog</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Other Projects</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://res-create.herokuapp.com" target="_blank" rel='noreferrer noopener'>res.Create</a>
                                <a className="dropdown-item" href="https://zaynaib.github.io/Bootstrap-Portfolio/" target="_blank" rel='noreferrer noopener'>Ola's Github</a>
                                <a className="dropdown-item" href="https://ttejuosho.github.io/portfolio/index.html" target="_blank" rel='noreferrer noopener'>Taiwo's Github</a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/ttejuosho/libiq" target="_blank" rel='noreferrer noopener'>Code</a>
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