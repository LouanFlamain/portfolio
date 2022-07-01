import React from "react";
import img from "../img/arrow.svg";

export default class Arrow extends React.Component {
  state = {
    left: 0,
    top: 0,
  };
  constructor() {
    super();
    this.move = this.move.bind(this);
  }

  move(event) {
    this.state.left = event.clientX;
    this.state.top = event.clientY;
    console.log(
      "pos left : " + this.state.left + " , pos top : " + this.state.top
    );
  }
  render() {
    return (
      <div
        onMouseMove={this.move}
        className="section m-6 border is-flex is-justify-content-center is-align-content-center relative"
      >
        <div className="arrow-1">
          <img src={img} className="border arrow absolute-center" />
        </div>
      </div>
    );
  }
}
