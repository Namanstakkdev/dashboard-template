import { useState } from "react";

const MessageBox = () => {
  const [dmenu, setDmenu] = useState("");
  const [mmenu, setMmenu] = useState("dropdown-menu dropdown-menu-right");
  const handleMessageBox = (m, d) => {
    setMmenu(m);
    setDmenu(d);
  };
  return (
    <li
      className={
        mmenu === "dropdown custom-dropdown messages-menu show"
          ? "dropdown custom-dropdown messages-menu show"
          : "dropdown custom-dropdown messages-menu"
      }
    >
      <a
        href="#"
        className="nav-link"
        data-toggle="dropdown"
        onClick={() => {
          dmenu === "dropdown-menu dropdown-menu-right show"
            ? handleMessageBox(
                "dropdown custom-dropdown messages-menu",
                "dropdown-menu dropdown-menu-right"
              )
            : handleMessageBox(
                "dropdown custom-dropdown messages-menu show",
                "dropdown-menu dropdown-menu-right show"
              );
        }}
      >
        <i className="icon-message "></i>
        <span className="badge badge-success badge-mini rounded-circle">4</span>
      </a>
      <ul
        className={
          dmenu === "dropdown-menu dropdown-menu-right show"
            ? "dropdown-menu dropdown-menu-right show"
            : "dropdown-menu dropdown-menu-right"
        }
      >
        <li>
          <ul className="menu pl-2 pr-2">
            <li>
              <a href="#">
                <div className="avatar float-left">
                  <img src="assets/img/dummy/u4.png" alt="" />
                  <span className="avatar-badge busy"></span>
                </div>
                <h4>
                  Support Team
                  <small>
                    <i className="icon icon-clock-o"></i> 5 mins
                  </small>
                </h4>
                <p>Why not buy a new awesome theme?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="avatar float-left">
                  <img src="assets/img/dummy/u1.png" alt="" />
                  <span className="avatar-badge online"></span>
                </div>
                <h4>
                  Support Team
                  <small>
                    <i className="icon icon-clock-o"></i> 5 mins
                  </small>
                </h4>
                <p>Why not buy a new awesome theme?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="avatar float-left">
                  <img src="assets/img/dummy/u2.png" alt="" />
                  <span className="avatar-badge idle"></span>
                </div>
                <h4>
                  Support Team
                  <small>
                    <i className="icon icon-clock-o"></i> 5 mins
                  </small>
                </h4>
                <p>Why not buy a new awesome theme?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="avatar float-left">
                  <img src="assets/img/dummy/u3.png" alt="" />
                  <span className="avatar-badge busy"></span>
                </div>
                <h4>
                  Support Team
                  <small>
                    <i className="icon icon-clock-o"></i> 5 mins
                  </small>
                </h4>
                <p>Why not buy a new awesome theme?</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="footer s-12 p-2 text-center">
          <a href="#">See All Messages</a>
        </li>
      </ul>
    </li>
  );
};

export default MessageBox;
