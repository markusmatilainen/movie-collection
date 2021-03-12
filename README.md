## Description

Web application for searching information about movies. Uses the fetch() method to get information from the OMDb API.

## Usage

Application has two input fields, one for the movie title, and another one for the release year. Release year is optional. When the user presses the "Search" button, the information about the movie will appear in the container below.

## Technologies

* [React](https://reactjs.org) - A JavaScript library for building modern user interfaces
* [Sass](https://sass-lang.com) - Preprocessor scripting language that is interpreted or compiled into CSS
* [include-media](https://eduardoboucas.github.io/include-media/) - Sass library for writing CSS media queries in an easy and maintainable way, using a natural and simplistic syntax
* [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - Provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. Application uses the fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

## The Open Movie Database

The [OMDbAPI](http://www.omdbapi.com) is a RESTful web service to obtain movie information. Application uses the API to get the information about a specific movie.