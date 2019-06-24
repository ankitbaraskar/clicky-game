import React, { Component } from "react";


class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                
                <ul className="navbar-nav" id="nav">
                    <li>
                    <a className="navbar-brand nav-item" id="overwrite-navbar-brand" href="/">Clicky Game</a>
                    </li>
                    <li className="nav-item">
                        Click an image to begin!
                    </li>
                    <li className="nav-item">
                        Score: <span>{this.props.score}</span> | Top Score: <span>{this.props.topScore}</span>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;