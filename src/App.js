import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import FilterBar from "./components/FilterBar";
import ShoeContainer from "./components/ShoeContainer";
import MaybeContainer from "./components/MaybeContainer";
import Footer from "./components/Footer";
import SelectPage from "./components/SelectPage";

const shoesUrl = "http://localhost:4000/shoes";

class App extends React.Component {
  state = {
    shoes: [],
    filtered: [],
    possibles: [],
    currentView: {},
    filterBar: true,
    isFiltered: false,
    mensPage: true,
    womensPage: false,
    collectionPage: false,
    selectPage: false,
    maybeBar: true,
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
      filterBar: true,
      maybeBar: true,
      selectPage: false,
    });
  };

  womenButton = () => {
    this.setState({
      mensPage: false,
      womensPage: true,
      isFiltered: false,
      collectionPage: false,
      filterBar: true,
      maybeBar: true,
      selectPage: false,
    });
  };

  collectionButton = () => {
    this.setState({
      mensPage: false,
      womensPage: false,
      isFiltered: false,
      collectionPage: true,
      filterBar: true,
      maybeBar: true,
      selectPage: false,
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

  addToPossibles = (shoe) => {
    if (
      this.state.possibles.length < 3 &&
      !this.state.possibles.find((possible) => possible.id === shoe.id)
    ) {
      this.setState({
        possibles: [...this.state.possibles, shoe],
        currentView: shoe
      });
    }
  };

  removeFromPossibles = (shoe) => {
    let possibles = this.state.possibles.filter(
      (possible) => possible.id !== shoe.id
    );
    this.setState({ possibles });
  };

  renderSelectPage = () => {
    if (this.state.possibles === []) {
      return null
    } else {
      this.setState({
        selectPage: !this.state.selectPage,
        filterBar: !this.state.filterBar,
        maybeBar: !this.state.maybeBar,
        mensPage: false,
        womensPage: false,
        currentView: this.state.possibles[0]
      });
    }
  };

  selectCurrentView = (shoe) => {
    this.setState({currentView: shoe})
  };

  render() {
    const {
      shoes,
      filtered,
      possibles,
      isFiltered,
      mensPage,
      womensPage,
      collectionPage,
      selectPage,
      filterBar,
      maybeBar,
      currentView,
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
        {selectPage ? (
          <SelectPage
            shoes={possibles}
            currentView={currentView}
            selectCurrentView={this.selectCurrentView}
          />
        ) : null}
        {filterBar ? (
          <FilterBar
            allButton={this.allButton}
            brandFilter={this.brandFilter}
            priceFilter={this.priceFilter}
          />
        ) : null}
        {isFiltered ? (
          <>
            {mensPage ? (
              <ShoeContainer
                shoes={menFiltered}
                addToPossibles={this.addToPossibles}
              />
            ) : null}
            {womensPage ? (
              <ShoeContainer
                shoes={womenFiltered}
                addToPossibles={this.addToPossibles}
              />
            ) : null}
            {collectionPage ? <ShoeContainer /> : null}
          </>
        ) : (
          <>
            {mensPage ? (
              <ShoeContainer
                shoes={menShoes}
                addToPossibles={this.addToPossibles}
              />
            ) : null}
            {womensPage ? (
              <ShoeContainer
                shoes={womenShoes}
                addToPossibles={this.addToPossibles}
              />
            ) : null}
            {collectionPage ? <ShoeContainer /> : null}
          </>
        )}
        {maybeBar ? (
          <MaybeContainer
            shoes={possibles}
            removeFromPossibles={this.removeFromPossibles}
            renderSelectPage={this.renderSelectPage}
          />
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default App;
