import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import FilterBar from "./components/FilterBar";
import ShoeContainer from "./components/ShoeContainer";
import MaybeContainer from "./components/MaybeContainer";
import Footer from "./components/Footer";



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

    const {shoes} = this.state

    return (
      <div className="App">
        <Banner />
        <FilterBar />
        <ShoeContainer {...shoes}/>
        <MaybeContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
