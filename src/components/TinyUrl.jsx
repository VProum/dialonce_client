import React from "react";

const TinyUrl = (props) => {
  return (
    <span>
      Tiny URL : <a href={"https://" + props.longUrl}>{props.shortUrl}</a>
    </span>
  );
};

export default TinyUrl;