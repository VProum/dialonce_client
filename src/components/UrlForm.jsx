import React from "react";
import apiHandler from "../api/apiHandler";

const UrlForm = (props) => {
  const handleChange = (event) => {
    props.setUrls("longUrl", event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let dbResult = await apiHandler.sendUrl({ longUrl: props.longUrl });
      props.setUrls("shortUrl", dbResult._id);
      props.setUrls("allUrl", [...props.urls, dbResult]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="longUrl">Paste your URL here</label>
      <input
        type="text"
        id="longUrl"
        name="longUrl"
        onChange={handleChange}
        value={props.longUrl}
      />
      <button>Submit</button>
    </form>
  );
};

export default UrlForm;
