import React from "react";

const AppButton = ({ text, type, url, styles, img, children }) => {
  if (type === "anchor") {
    return (
      <a href={url} className={`mx-3 ${styles}`}>
        {text}
      </a>
    );
  }
  if (type === "listItem") {
    return (
      <li>
        <img className="" src={img} alt="" />
        <a href={url} className={` ${styles}`}>
          {text}
          {children}
        </a>
      </li>
    );
  }
  return (
    <button className={`${styles}`} type="button">
      {text}
    </button>
  );
};

export default AppButton;
