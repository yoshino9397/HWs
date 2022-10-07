import React, { Component } from "react";
import "../App.css";
import lookLeft from "../assets/look-left.jpeg";
import lookRight from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  constructor(props) {
    super(props);
    this.state = { img: lookRight };
  }
  handleClick = (img) => {
    this.setState({ img });
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.img} />
        </div>
        <button className="btn" onClick={() => this.handleClick(lookLeft)}>
          ⭠
        </button>
        <button className="btn" onClick={() => this.handleClick(lookRight)}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
