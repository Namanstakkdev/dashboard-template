import React from "react";

const ContentMenu_heading = ({ icon, title }) => {
  return (
    <a>
      <i className={icon}></i>
      <span>{title}</span> <i className=" icon-angle-left  pull-right"></i>
    </a>
  );
};

export default ContentMenu_heading;
