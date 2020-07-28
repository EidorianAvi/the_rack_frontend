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
    mensPage: true,
    womensPage: false,
    collectionPage: false,
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

  menButton = () => {
    this.setState({
      mensPage: true,
      womensPage: false,
      collectionPage: false,
    });
  };

  womenButton = () => {
    this.setState({
      mensPage: false,
      womensPage: true,
      collectionPage: false,
    });
  };

  render() {
    const { shoes, mensPage, womensPage, collectionPage } = this.state;
    const menShoes = shoes.filter((shoe) => shoe.gender === "men");
    const womenShoes = shoes.filter((shoe) => shoe.gender === "women");

    return (
      <div className="App">
        <Banner menButton={this.menButton} womenButton={this.womenButton} />
        <FilterBar />
        {mensPage ? <ShoeContainer shoes={menShoes} /> : null}
        {womensPage ? <ShoeContainer shoes={womenShoes} /> : null}
        {collectionPage ? <ShoeContainer /> : null}
        <MaybeContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
