import React, { Component } from "react";
import "./App.css";
import apiHandler from "./api/apiHandler";
import TinyUrl from "./components/TinyUrl";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

class App extends Component {
  state = {
    longUrl: "",
    shortUrl: "",
    allUrl: [],
  };

  setUrls = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  async componentDidMount() {
    const dbUrl = await apiHandler.getUrls();
    this.setState({
      allUrl: dbUrl,
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to short URL </h1>
        <UrlForm
          urls={this.state.allUrl}
          setUrls={this.setUrls}
          longUrl={this.state.longUrl}
        />
        <TinyUrl longUrl={this.state.longUrl} shortUrl={this.state.shortUrl} />
        <UrlList urls={this.state.allUrl} setUrls={this.setUrls} />
      </div>
    );
  }
}

export default App;
