# the_rack

The rack is your tool to browsing a men and womens catalogue of shoes and narrow down your search.

## Table of Contents
* [General Info](#general-info)
* [Inspiration](#inspiration)
* [Demonstration Video](#demonstration-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Example Code](#example-code)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)
* [License](#license)


## General Info
The Rack is a web application designed to peruse tennis shoes of many brands. The point of the application is to not only get you more detailed information on all the shoes but also to narrow down the search for the perfect shoe. 

## Inspiration 
The inspiration for The Rack was due to both a love for shoes but also a difficulty in selecting the perfect pair.

## Demonstration Video
[theRack Youtube Demonstation](https://youtu.be/5GngnwWPQiI)

## Technologies 
* React - version 16.3.1
* JavaScript - version 1.8.5
* CSS - version 3
* Ruby on Rails - version 6


## Example Code
```JavaScript

  addToCollection = (shoeID) => {
    let shoe = this.state.shoes.find((shoe) => shoeID === shoe.id);
    console.log(shoe);
    this.setState({
      userCollection: [...this.state.userCollection, shoe],
      possibles: [],
    });
    fetch("http://localhost:4000/user_shoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        shoe_id: shoeID,
      }),
    });
  };
```

## Features
Current Features:
* Browse men and womens sneaker catalogue
* Select up to three shoes for favorites
* Browse more detailed description of favorites and then add one to your collection
* User sign in with personal collection

Future Features:
* Full access to the entire sneak API's selection with live API calls
* More user customization
* Ability to add your own shoes into the database or into users collection


## Status
The application is fully functional and ready to be enjoyed at current status. Future updates and improvements are still a possibility for future renditions.

## Contact
Created by [Adrian Avila](https://www.linkedin.com/in/eidorianavi/).

If you have any questions or comments feel free to reach out thank you for your time.


