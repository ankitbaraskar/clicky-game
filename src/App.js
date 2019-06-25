import React, { Component } from "react";
import Nav from "./components/js/nav";
import Header from "./components/js/header";
import Main from "./components/js/main";
import Footer from "./components/js/footer";
import cartoons from "./cartoons.json";

class App extends Component {

    state = {
        cartoons: cartoons,
        score: 0,
        topScore: 0,
        names: []
    };

    shuffleCartoons = () => {

        const cartoonsDotheShuffle = (a) => {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        const shuffledCartoons = cartoonsDotheShuffle(this.state.cartoons);
        this.setState({ cartoons: shuffledCartoons });
    }

    incrementScore = () => {

        let score = this.state.score + 1;
        let topScore = this.state.topScore;
        if (topScore < score) {
            topScore = topScore + 1;
            this.setState({ topScore })
        }
     
        this.setState({ score });
  
    }

    nameCheck = (name) => {

        let previousListofNames = this.state.names;
        console.log("used to be this array: ")
        console.log(previousListofNames);
        if (previousListofNames.length > 0) {

            if (previousListofNames.includes(name)) {
                let score = 0;
                let names = [];

                this.setState({ score },()=>console.log("score reset "));
                this.setState({ names },()=>console.log("names array reset "));
 
            } else {
                previousListofNames.push(name);
                this.setState({ names: previousListofNames },()=>console.log(this.state));
            }

        } else if (previousListofNames.length === 0) {
            previousListofNames.push(name);
            this.setState({ names: previousListofNames },()=>console.log(this.state));
        }
    }

    render() {
        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Header />
                <Main
                    nameCheck={this.nameCheck}
                    incrementScore={this.incrementScore}
                    shuffleCartoons={this.shuffleCartoons}
                    cartoons={this.state.cartoons}
                    // id={cartoons.id}
                    // key={cartoons.id}
                    // name={cartoons.name}
                    // image={cartoons.image}
                />
                <Footer />
            </div>
        )
    }
}

export default App;