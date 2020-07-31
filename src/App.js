import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import FilterBar from "./components/FilterBar";
import ShoeContainer from "./components/ShoeContainer";
import MaybeContainer from "./components/MaybeContainer";
import Footer from "./components/Footer";
import SelectPage from "./components/SelectPage";
import SignUpForm from "./components/SignUpForm";
import CollectionPage from "./components/CollectionPage";
import LoginForm from "./components/LoginForm";

const shoesUrl = "http://localhost:4000/shoes";


class App extends React.Component {
  state = {
    shoes: [],
    user: {},
    alerts: [],
    filtered: [],
    possibles: [],
    currentView: {},
    userCollection: [],
    filterBar: true,
    isFiltered: false,
    mensPage: true,
    womensPage: false,
    collectionPage: false,
    selectPage: false,
    maybeBar: true,
    loginForm: false,
    signUpForm: false,
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
      loginForm: false,
      signUpForm: false,
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
      loginForm: false,
      signUpForm: false,
    });
  };

  collectionButton = () => {
    if (localStorage.token) {
      this.renderCollection()
      this.setState({
        mensPage: false,
        womensPage: false,
        isFiltered: false,
        collectionPage: true,
        filterBar: false,
        maybeBar: false,
        selectPage: false,
        loginForm: false,
        signUpForm: false,
      });
    } else {
      this.loginButton();
    }
  };

  loginButton = () => {
    this.setState({
      loginForm: true,
      maybeBar: false,
      signUpForm: false,
    });
  };

  signUpButton = () => {
    this.setState({
      loginForm: false,
      signUpForm: true,
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
      default: 
        this.setState({ isFiltered: false})
    }
  };

  addToPossibles = (shoe) => {
    if (
      this.state.possibles.length < 3 &&
      !this.state.possibles.find((possible) => possible.id === shoe.id)
    ) {
      this.setState({
        possibles: [...this.state.possibles, shoe],
        currentView: shoe,
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
      return null;
    } else {
      this.setState({
        selectPage: !this.state.selectPage,
        filterBar: !this.state.filterBar,
        maybeBar: !this.state.maybeBar,
        mensPage: false,
        womensPage: false,
        currentView: this.state.possibles[0],
      });
    }
  };

  selectCurrentView = (shoe) => {
    this.setState({ currentView: shoe });
  };

  signUp = (user) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          this.setState({
            alerts: response.errors,
          });
        } else {
          localStorage.setItem("token", response.token);
          this.setState({
            user: response.user,
            alerts: ["User successfully created!"],
          });
        }
      })
      .then(() => this.collectionButton())
  };

  loginUser = (user) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          this.setState({
            alerts: response.errors,
          });
        } else {
          localStorage.setItem("token", response.token);
          this.setState({
            user: response.user,
            alerts: ["Welcome"],
          })
        }
      })
      .then(() => this.collectionButton())
  }



  renderCollection = () => {
    let id = this.state.user.id
    console.log(id)
    // fetch(`http:localhost:4000/users/`)
  }

  logoutUser = () => {
    localStorage.removeItem("token");
    this.setState({
      user: {},
      alerts: []
    });
    this.menButton();
  };

  addToCollection = (shoeID) => {
    fetch('http://localhost:4000/user_shoes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        shoe_id: shoeID
      })
    })
  }

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
      loginForm,
      signUpForm,
      alerts,
      user
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
          loginButton={this.loginButton}
          logoutUser={this.logoutUser}
        />
        {selectPage ? (
          <SelectPage
            shoes={possibles}
            currentView={currentView}
            selectCurrentView={this.selectCurrentView}
            addToCollection={this.addToCollection}
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
            {collectionPage ? <CollectionPage user={user} /> : null}
          </>
        )}
        {loginForm ? (
          <LoginForm
            signUpButton={this.signUpButton}
            loginUser={this.loginUser}
            alerts={alerts}
            collectionButton={this.collectionButton}
          />
        ) : null}
        {signUpForm ? (
          <SignUpForm
            signUp={this.signUp}
            loginButton={this.loginButton}
            alerts={alerts}
            collectionButton={this.collectionButton}
          />
        ) : null}
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
