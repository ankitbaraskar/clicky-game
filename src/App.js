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
        console.log(previousListofNames);
        if (previousListofNames.length > 0) {

            if (previousListofNames.includes(name)) {
                this.setState({ score: 0 });
                this.setState({ names: [] });
            } else {
                previousListofNames.push(name);
                this.setState({ names: previousListofNames });
            }

        } else if (previousListofNames.length === 0) {
            previousListofNames.push(name);
            this.setState({ names: previousListofNames });
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
                    id={cartoons.id}
                    key={cartoons.id}
                    name={cartoons.name}
                    image={cartoons.image}
                />
                <Footer />
            </div>
        )
    }
}

export default App;