import jsondata from "../../../../config/menu_dom_structure.json";

const PushMenu = ({ navbar, setNavbar }) => {
  return (
    <a
      href="#"
      data-toggle="push-menu"
      className={jsondata.header.icon}
      onClick={() => {
        navbar ? setNavbar(false) : setNavbar(true);
      }}
    >
      <i></i>
    </a>
  );
};

export default PushMenu;
