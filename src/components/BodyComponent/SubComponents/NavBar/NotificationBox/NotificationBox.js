import { useState } from "react";

const NotificationBox = () => {
  const [dnotificationmenu, setDnotificiationmenu] = useState("");
  const [mnotificationmenu, setMnotificationmenu] = useState(
    "dropdown-menu dropdown-menu-right"
  );
  const handleNotificationBox = (m, d) => {
    setMnotificationmenu(m);
    setDnotificiationmenu(d);
  };
  return (
    <li
      className={
        mnotificationmenu === "dropdown custom-dropdown notifications-menu show"
          ? "dropdown custom-dropdown notifications-menu show"
          : "dropdown custom-dropdown notifications-menu"
      }
    >
      <a
        href="#"
        className=" nav-link"
        data-toggle="dropdown"
        aria-expanded="false"
        onClick={() => {
          dnotificationmenu === "dropdown-menu dropdown-menu-right show"
            ? handleNotificationBox(
                "dropdown custom-dropdown notifications-menu",
                "dropdown-menu dropdown-menu-right"
              )
            : handleNotificationBox(
                "dropdown custom-dropdown notifications-menu show",
                "dropdown-menu dropdown-menu-right show"
              );
        }}
      >
        <i className="icon-notifications "></i>
        <span className="badge badge-danger badge-mini rounded-circle">4</span>
      </a>
      <ul
        className={
          dnotificationmenu === "dropdown-menu dropdown-menu-right show"
            ? "dropdown-menu dropdown-menu-right show"
            : "dropdown-menu dropdown-menu-right"
        }
      >
        <li className="header">You have 10 notifications</li>
        <li>
          <ul className="menu">
            <li>
              <a href="#">
                <i className="icon icon-data_usage text-success"></i> 5 new
                members joined today
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon icon-data_usage text-danger"></i> 5 new
                members joined today
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon icon-data_usage text-yellow"></i> 5 new
                members joined today
              </a>
            </li>
          </ul>
        </li>
        <li className="footer p-2 text-center">
          <a href="#">View all</a>
        </li>
      </ul>
    </li>
  );
};

export default NotificationBox;
