import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

class UrlForm extends Component {
  handleChange = (event) => {
    this.props.setUrls("longUrl", event.target.value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let data = await apiHandler.sendUrl(this.state.longUrl);
      this.props.setUrls("shortUrl", data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="longUrl">Paste your URL here</label>
        <input
          type="text"
          id="longUrl"
          name="longUrl"
          value={this.props.longUrl}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default UrlForm;
