import React, { Component } from "react";
import Hero from "./containers/Hero/Hero";
import Navbar from "./containers/Navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    );
  }
}
