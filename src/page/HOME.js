import React from "react";
import Card from "../component/CARDHEADER";

export default class Home extends React.Component {
  state = {};
  constructor() {
    super();
  }

  render() {
    return (
      <div className="section">
        <Card />
      </div>
    );
  }
}
