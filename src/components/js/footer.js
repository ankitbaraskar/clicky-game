import React, { Component } from "react";
import reactimage from "../../assets/images/react.svg";


class Footer extends Component{
    render(){
        return (
            <footer className="footer">
                <div className="bottom">
                    Clicky Game!
                    <img alt="react" src={reactimage} />
                </div>
            </footer>
        )
    }
}

export default Footer;