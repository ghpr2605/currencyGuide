import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    currencyDetails: [],
  };

  componentDidMount() {
    const url = "https://api.coinbase.com/v2/currencies";

    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => {
        this.setState({ currencyDetails: data });
      });
  }
  render() {
    const { currencyDetails } = this.state;
    return <Table displayData={currencyDetails}></Table>;
  }
}

export default App;
