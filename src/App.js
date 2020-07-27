import React from "react";
import "./App.css";
import Banner from "./components/Banner";

const shoesUrl = "http://localhost:4000/shoes";

class App extends React.Component {
  state = {
    shoes: [],
  };

  componentDidMount = () => {
    fetch(shoesUrl)
      .then((response) => response.json())
      .then((results) =>
        this.setState({
          shoes: results,
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Banner />
      </div>
    );
  }
}

export default App;
