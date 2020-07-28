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
    filtered: [],
    isFiltered: false,
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
      isFiltered: false,
      womensPage: false,
      collectionPage: false,
    });
  };

  womenButton = () => {
    this.setState({
      mensPage: false,
      womensPage: true,
      isFiltered: false,
      collectionPage: false,
    });
  };

  collectionButton = () => {
    this.setState({
      mensPage: false,
      womensPage: false,
      isFiltered: false,
      collectionPage: true,
    });
  };

  allButton = () => {
    this.setState({
      isFiltered: false,
    });
  };

  brandFilter = (brand) => {
    let filtered = this.state.shoes.filter((shoe) => shoe.brand === brand);
    this.setState({
      filtered: filtered,
      isFiltered: true,
    });
  };

  priceFilter = (price) => {
    let lowPrice = this.state.shoes.filter((shoe) => shoe.retail_price <= 100);
    let midPrice = this.state.shoes.filter(
      (shoe) => shoe.retail_price > 100 && shoe.retail_price <= 200
    );
    let highPrice = this.state.shoes.filter((shoe) => shoe.retail_price > 200);
    switch (price) {
      case "low":
        this.setState({ filtered: lowPrice, isFiltered: true });
        break;
      case "mid":
        this.setState({ filtered: midPrice, isFiltered: true });
        break;
      case "high":
        this.setState({ filtered: highPrice, isFiltered: true });
        break;
    }
  };

  render() {
    const {
      shoes,
      filtered,
      isFiltered,
      mensPage,
      womensPage,
      collectionPage,
    } = this.state;

    const menShoes = shoes.filter((shoe) => shoe.gender === "men");
    const womenShoes = shoes.filter((shoe) => shoe.gender === "women");
    const menFiltered = filtered.filter((shoe) => shoe.gender === "men");
    const womenFiltered = filtered.filter((shoe) => shoe.gender === "women");

    return (
      <div className="App">
        <Banner
          menButton={this.menButton}
          womenButton={this.womenButton}
          collectionButton={this.collectionButton}
        />
        <FilterBar
          allButton={this.allButton}
          brandFilter={this.brandFilter}
          priceFilter={this.priceFilter}
        />
        {isFiltered ? (
          <>
            {mensPage ? <ShoeContainer shoes={menFiltered} /> : null}
            {womensPage ? <ShoeContainer shoes={womenFiltered} /> : null}
            {collectionPage ? <ShoeContainer /> : null}
          </>
        ) : (
          <>
            {mensPage ? <ShoeContainer shoes={menShoes} /> : null}
            {womensPage ? <ShoeContainer shoes={womenShoes} /> : null}
            {collectionPage ? <ShoeContainer /> : null}
          </>
        )}
        <MaybeContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
