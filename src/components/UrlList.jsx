import React from "react";
import apiHandler from "../api/apiHandler";

const UrlList = (props) => {
  const deleteHandle = async (id) => {
    const dbResult = await apiHandler.deleteUrl(id);
    props.setUrls("allUrl", dbResult);
  };

  return (
    <div>
      <h2> All the urls</h2>
      {props.urls.map((url, i) => {
        return (
          <div
            style={{
              border: "1px solid dodgerblue",
              width: "75%",
              margin: "5px auto",
            }}
          >
            <span>
              <b>{url.longUrl}</b>
            </span>{" "}
            <br />
            <span>
              Tiny URL :{" "}
              <a href={url.longUrl} target="_blank">
                {url._id}{" "}
              </a>
            </span>
            <button onClick={() => deleteHandle(url._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default UrlList;
