import React, { Component } from "react";
import Logo from "../../components/navbar/companyLogo/logo";
import Navlist from "../../components/navbar/navlist/navlist";

import styles from "./navbar.module.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={styles.navbar}>
          <Logo />
          <Navlist />
        </nav>
      </div>
    );
  }
}
