import React, { Component } from "react";
import Nav from "./components/js/nav";
import Header from "./components/js/header";
import Main from "./components/js/main";
import Footer from "./components/js/footer";

class App extends Component{
    render(){
        return (
            <div>
                <Nav />
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;