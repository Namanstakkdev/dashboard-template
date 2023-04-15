import { useEffect, useState } from "react";

const ContentMenu_Subdata = ({ key, icon, title }) => {
  return (
    <li key={key}>
      <a href="index.html">
        <i className={icon}></i>
        {title}
      </a>
    </li>
  );
};

export default ContentMenu_Subdata;
