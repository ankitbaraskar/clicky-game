import React, { Component } from "react";
import cartoons from "../../cartoons.json";


class Main extends Component {
    render() {
        return (
            <main>

                <div className="row">
                    <div className="col-lg-3 card card-img-top">
                        <img alt={cartoons[0].name} src={cartoons[0].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top">
                        <img alt={cartoons[0].name} src={cartoons[0].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top">
                        <img alt={cartoons[0].name} src={cartoons[0].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                    <div className="col-lg-3 card card-img-top">
                        One of three columns
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;