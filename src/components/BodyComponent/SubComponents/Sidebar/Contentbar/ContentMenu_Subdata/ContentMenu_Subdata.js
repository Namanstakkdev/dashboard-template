const ContentMenu_Subdata = ({ icon, title }) => {
  console.log("Title" + title);
  return (
    <li>
      <a href="index.html">
        <i className={icon}></i>
        {title}
      </a>
    </li>
  );
};

export default ContentMenu_Subdata;
