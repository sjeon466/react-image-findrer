import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import MuiThemeProdivder from "material-ui/styles/MuiThemeProvider";
import Search from "./components/search/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProdivder>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProdivder>
    );
  }
}

export default App;
