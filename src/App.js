import React, { Component } from "react";
import "./App.css";
import TinyUrl from "./components/TinyUrl";
import UrlForm from "./components/UrlForm";

class App extends Component {
  state = {
    longUrl: "www.youtube.com",
    shortUrl: "youtube",
  };

  setUrls = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to short URL</h1>
        <UrlForm setUrls={this.setUrls} longUrl={this.state.longUrl} />
        <TinyUrl longUrl={this.state.longUrl} shortUrl={this.state.shortUrl} />
      </div>
    );
  }
}

export default App;
