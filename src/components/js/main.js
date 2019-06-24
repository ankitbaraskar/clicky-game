import React, { Component } from "react";
import cartoons from "../../cartoons.json";


class Main extends Component {
 
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[0].name);}}>
                        <img alt={cartoons[0].name} src={cartoons[0].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[1].name);}}>
                        <img alt={cartoons[1].name} src={cartoons[1].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[2].name);}}>
                        <img alt={cartoons[2].name} src={cartoons[2].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[3].name);}}>
                        <img alt={cartoons[3].name} src={cartoons[3].image} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[4].name);}}>
                        <img alt={cartoons[4].name} src={cartoons[4].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[5].name);}}>
                        <img alt={cartoons[5].name} src={cartoons[5].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[6].name);}}>
                        <img alt={cartoons[6].name} src={cartoons[6].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[7].name);}}>
                        <img alt={cartoons[7].name} src={cartoons[7].image} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[8].name);}}>
                        <img alt={cartoons[8].name} src={cartoons[8].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[9].name);}}>
                        <img alt={cartoons[9].name} src={cartoons[9].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[10].name);}}>
                        <img alt={cartoons[10].name} src={cartoons[10].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.shuffleCartoons(); this.props.incrementScore(); this.props.nameCheck(cartoons[11].name);}}>
                        <img alt={cartoons[11].name} src={cartoons[11].image} />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;