import React, { Component } from "react";
import Logo from "../../components/navbar/companyLogo/logo";
import Navlist from "../../components/navbar/navlist/navlist";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Navlist />
      </div>
    );
  }
}
