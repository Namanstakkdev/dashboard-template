const PushMenu = ({ navbar, setNavbar }) => {
  return (
    <a
      href="#"
      data-toggle="push-menu"
      className="paper-nav-toggle left ml-2 fixed"
      onClick={() => {
        navbar ? setNavbar(false) : setNavbar(true);
      }}
    >
      <i></i>
    </a>
  );
};

export default PushMenu;
