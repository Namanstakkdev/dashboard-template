const ContentMenu_Subdata = ({ icon, menu_data }) => {
  console.log("menu_data from Component " + menu_data);

  return (
    <>
      {menu_data.map((vals) => (
        <li>
          <a href="index.html">
            <i className="icon icon-folder5"></i>
            {vals}
          </a>
        </li>
      ))}
    </>
  );
};

export default ContentMenu_Subdata;
