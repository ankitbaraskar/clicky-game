import React, { Component } from "react";
import cartoons from "../../cartoons.json";


class Main extends Component {
    state = {
        cartoons
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
        this.setState({ shuffledCartoons });
    }

    render() {
        return (
            <main>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[0].name} src={cartoons[0].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[1].name} src={cartoons[1].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[2].name} src={cartoons[2].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[3].name} src={cartoons[3].image} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[4].name} src={cartoons[4].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[5].name} src={cartoons[5].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[6].name} src={cartoons[6].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[7].name} src={cartoons[7].image} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[8].name} src={cartoons[8].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[9].name} src={cartoons[9].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[10].name} src={cartoons[10].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={this.shuffleCartoons}>
                        <img alt={cartoons[11].name} src={cartoons[11].image} />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;