import { useState } from "react";

const UserMenuBox = () => {
  const [dusermenu, setDusermenu] = useState("");
  const [musermenu, setMusermenu] = useState(
    "dropdown custom-dropdown user user-menu"
  );

  const handleUserMenu = (m, d) => {
    setMusermenu(m);
    setDusermenu(d);
  };

  return (
    <li
      className={
        musermenu === "dropdown custom-dropdown user user-menu show"
          ? "dropdown custom-dropdown user user-menu show"
          : "dropdown custom-dropdown user user-menu"
      }
      onClick={() => {
        dusermenu === "dropdown-menu p-4 dropdown-menu-right show"
          ? handleUserMenu(
              "dropdown custom-dropdown user user-menu",
              "dropdown-menu p-4 dropdown-menu-right"
            )
          : handleUserMenu(
              "dropdown custom-dropdown user user-menu show",
              "dropdown-menu p-4 dropdown-menu-right show"
            );
      }}
    >
      <a href="#" className="nav-link" data-toggle="dropdown">
        <img
          src={require("../../../../../assets/img/dummy/u8.png")}
          className="user-image"
          alt="User Image"
        />
        <i className="icon-more_vert "></i>
      </a>
      <div
        className={
          dusermenu === "dropdown-menu p-4 dropdown-menu-right show"
            ? "dropdown-menu p-4 dropdown-menu-right show"
            : "dropdown-menu p-4 dropdown-menu-right"
        }
      >
        <div className="row box justify-content-between my-4">
          <div className="col">
            <a href="#">
              <i className="icon-apps purple lighten-2 avatar  r-5"></i>
              <div className="pt-1">Apps</div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <i className="icon-beach_access pink lighten-1 avatar  r-5"></i>
              <div className="pt-1">Profile</div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <i className="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
              <div className="pt-1">Settings</div>
            </a>
          </div>
        </div>
        <div className="row box justify-content-between my-4">
          <div className="col">
            <a href="#">
              <i className="icon-star light-green lighten-1 avatar  r-5"></i>
              <div className="pt-1">Favourites</div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <i className="icon-save2 orange accent-1 avatar  r-5"></i>
              <div className="pt-1">Saved</div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <i className="icon-perm_data_setting grey darken-3 avatar  r-5"></i>
              <div className="pt-1">Settings</div>
            </a>
          </div>
        </div>
        <hr />
        <div className="row box justify-content-between my-4">
          <div className="col">
            <a href="#">
              <i className="icon-apps purple lighten-2 avatar  r-5"></i>
              <div className="pt-1">Apps</div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <i className="icon-beach_access pink lighten-1 avatar  r-5"></i>
              <div className="pt-1">Profile</div>
            </a>
          </div>
          <div className="col">
            <a href="#">
              <i className="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
              <div className="pt-1">Settings</div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserMenuBox;
