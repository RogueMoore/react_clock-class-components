import { Component } from "react";

export class Clock extends Component {
  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerClockTime = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {" time is "}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
