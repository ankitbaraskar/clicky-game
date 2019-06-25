import React, { Component } from "react";
// import cartoons from "../../cartoons.json";


class Main extends Component {
 
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[0].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[0].name} src={this.props.cartoons[0].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[1].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[1].name} src={this.props.cartoons[1].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[2].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[2].name} src={this.props.cartoons[2].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[3].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[3].name} src={this.props.cartoons[3].image} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[4].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[4].name} src={this.props.cartoons[4].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[5].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[5].name} src={this.props.cartoons[5].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[6].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[6].name} src={this.props.cartoons[6].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[7].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[7].name} src={this.props.cartoons[7].image} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[8].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[8].name} src={this.props.cartoons[8].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[9].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[9].name} src={this.props.cartoons[9].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[10].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[10].name} src={this.props.cartoons[10].image} />
                    </div>
                    <div className="col-lg-3 card card-img-top" onClick={()=>{this.props.incrementScore(); this.props.nameCheck(this.props.cartoons[11].name); this.props.shuffleCartoons();}}>
                        <img alt={this.props.cartoons[11].name} src={this.props.cartoons[11].image} />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;