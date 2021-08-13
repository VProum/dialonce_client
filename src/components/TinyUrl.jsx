import React from "react";

const TinyUrl = (props) => {
  return (
    <span>
      Tiny URL :{" "}
      <a href={props.longUrl} target="_blank">
        {props.shortUrl}
      </a>
    </span>
  );
};

export default TinyUrl;
