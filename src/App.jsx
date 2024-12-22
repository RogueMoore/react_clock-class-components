import { Component } from "react";
import "./App.css";
import { Clock } from "./components/Clock/Clock";

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    hasClock: true,
    clockName: "Clock-0",
  };

  rightClick = (e) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = (e) => {
    e.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener("contextmenu", this.rightClick);
    document.addEventListener("click", this.leftClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {/* Если hasClock === true, показываем Clock */}
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export const AppOld = () => {
  const today = new Date();
  let clockName = "Clock-0";

  // This code starts a timer
  const timerId = window.setInterval(() => {
    clockName = getRandomName();
  }, 3300);

  // this code stops the timer
  window.clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div ref={myClock} className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {" time is "}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    </div>
  );
};
