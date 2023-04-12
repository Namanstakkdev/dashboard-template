import { useState } from "react";

const NavBar = () => {
  const [dmenu, setDmenu] = useState("");
  const [mmenu, setMmenu] = useState("dropdown-menu dropdown-menu-right");

  const [dnotificationmenu, setDnotificiationmenu] = useState("");
  const [mnotificationmenu, setMnotificationmenu] = useState(
    "dropdown-menu dropdown-menu-right"
  );

  const [dusermenu, setDusermenu] = useState("");
  const [musermenu, setMusermenu] = useState(
    "dropdown-menu dropdown-menu-right"
  );

  const [rightnavBar, setRightNavbar] = useState(false);

  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const handleMessageBox = (m, d) => {
    setMmenu(m);
    setDmenu(d);
  };

  const handleNotificationBox = (m, d) => {
    setMnotificationmenu(m);
    setDnotificiationmenu(d);
  };

  const handleUserMenu = (m, d) => {
    setMusermenu(m);
    setDusermenu(d);
  };

  return (
    <div>
      <div className="has-sidebar-left has-sidebar-tabs">
        <div className="pos-f-t">
          <div
            className={toggleSearchBar ? "collapse show" : "collapse"}
            id="navbarToggleExternalContent"
          >
            <div className="bg-dark pt-2 pb-2 pl-4 pr-2">
              <div className="search-bar">
                <input
                  className="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50"
                  type="text"
                  placeholder="start typing..."
                />
              </div>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="paper-nav-toggle paper-nav-white active "
                onClick={() => {
                  toggleSearchBar
                    ? setToggleSearchBar(false)
                    : setToggleSearchBar(true);
                }}
              >
                <i></i>
              </a>
            </div>
          </div>
        </div>
        <div className="sticky">
          <div className="navbar navbar-expand d-flex justify-content-between bd-navbar white shadow">
            <div className="relative">
              <div className="d-flex">
                <div className="d-none d-md-block">
                  <h1 className="nav-title text-white">Dashboard</h1>
                </div>
              </div>
            </div>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
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
                    <span className="badge badge-success badge-mini rounded-circle">
                      4
                    </span>
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
                <li
                  className={
                    mnotificationmenu ===
                    "dropdown custom-dropdown notifications-menu show"
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
                      dnotificationmenu ===
                      "dropdown-menu dropdown-menu-right show"
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
                    <span className="badge badge-danger badge-mini rounded-circle">
                      4
                    </span>
                  </a>
                  <ul
                    className={
                      dnotificationmenu ===
                      "dropdown-menu dropdown-menu-right show"
                        ? "dropdown-menu dropdown-menu-right show"
                        : "dropdown-menu dropdown-menu-right"
                    }
                  >
                    <li className="header">You have 10 notifications</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <i className="icon icon-data_usage text-success"></i>{" "}
                            5 new members joined today
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-data_usage text-danger"></i>{" "}
                            5 new members joined today
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-data_usage text-yellow"></i>{" "}
                            5 new members joined today
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer p-2 text-center">
                      <a href="#">View all</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i
                      className=" icon-search3 "
                      onClick={() => {
                        toggleSearchBar
                          ? setToggleSearchBar(false)
                          : setToggleSearchBar(true);
                      }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link ml-2" data-toggle="control-sidebar">
                    <i
                      className="icon-tasks "
                      onClick={() => {
                        rightnavBar
                          ? setRightNavbar(false)
                          : setRightNavbar(true);
                      }}
                    ></i>
                  </a>
                </li>
                <li
                  className={
                    mmenu === "dropdown custom-dropdown user user-menu show"
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
                      src={require("../../assets/img/dummy/u8.png")}
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      <aside
        className={
          rightnavBar
            ? "control-sidebar fixed white control-sidebar-open"
            : "control-sidebar fixed white"
        }
      >
        <div className="slimScroll">
          <div className="sidebar-header">
            <h4>Activity List</h4>
            <a
              href="#"
              data-toggle="control-sidebar"
              className="paper-nav-toggle  active"
            >
              <i></i>
            </a>
          </div>
          <div className="p-3">
            <div>
              <div className="my-3">
                <small>25% Complete</small>
                <div className="progress" style={{ height: "3px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="my-3">
                <small>45% Complete</small>
                <div className="progress" style={{ height: "3px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="my-3">
                <small>60% Complete</small>`
                <div className="progress" style={{ height: "3px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="my-3">
                <small>75% Complete</small>
                <div className="progress" style={{ height: "3px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="my-3">
                <small>100% Complete</small>
                <div className="progress" style={{ height: "3px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-primary text-white">
            <div className="row">
              <div className="col-md-6">
                <h5 className="font-weight-normal s-14">Sodium</h5>
                <span className="font-weight-lighter text-primary">
                  Spark Bar
                </span>
                <div>
                  {" "}
                  Oxygen
                  <span className="text-primary">
                    <i className="icon icon-arrow_downward"></i> 67%
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <canvas
                  width="100"
                  height="70"
                  data-chart="spark"
                  data-chart-type="bar"
                  data-dataset="[[28,68,41,43,96,45,100,28,68,41,43,96,45,100,28,68,41,43,96,45,100,28,68,41,43,96,45,100]]"
                  data-labels="['a','b','c','d','e','f','g','h','i','j','k','l','m','n','a','b','c','d','e','f','g','h','i','j','k','l','m','n']"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table
              id="recent-orders"
              className="table table-hover mb-0 ps-container ps-theme-default"
            >
              <tbody>
                <tr>
                  <td>
                    <a href="#">INV-281281</a>
                  </td>
                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>
                  <td>$ 1228.28</td>
                </tr>
                <tr>
                  <td>
                    <a href="#">INV-01112</a>
                  </td>
                  <td>
                    <span className="badge badge-warning">Overdue</span>
                  </td>
                  <td>$ 5685.28</td>
                </tr>
                <tr>
                  <td>
                    <a href="#">INV-281012</a>
                  </td>
                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>
                  <td>$ 152.28</td>
                </tr>
                <tr>
                  <td>
                    <a href="#">INV-01112</a>
                  </td>
                  <td>
                    <span className="badge badge-warning">Overdue</span>
                  </td>
                  <td>$ 5685.28</td>
                </tr>
                <tr>
                  <td>
                    <a href="#">INV-281012</a>
                  </td>
                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>
                  <td>$ 152.28</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sidebar-header">
            <h4>Activity</h4>
            <a
              href="#"
              data-toggle="control-sidebar"
              className="paper-nav-toggle  active"
              onClick={() => {
                rightnavBar ? setRightNavbar(false) : setRightNavbar(true);
              }}
            >
              <i></i>
            </a>
          </div>
          <div className="p-4">
            <div className="activity-item activity-primary">
              <div className="activity-content">
                <small className="text-muted">
                  <i className="icon icon-user position-left"></i> 5 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur which ascing elit
                  users.
                </p>
              </div>
            </div>
            <div className="activity-item activity-danger">
              <div className="activity-content">
                <small className="text-muted">
                  <i className="icon icon-user position-left"></i> 8 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit ametcon the sectetur that ascing elit
                  users.
                </p>
              </div>
            </div>
            <div className="activity-item activity-success">
              <div className="activity-content">
                <small className="text-muted">
                  <i className="icon icon-user position-left"></i> 10 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet cons the ecte tur and adip ascing
                  elit users.
                </p>
              </div>
            </div>
            <div className="activity-item activity-warning">
              <div className="activity-content">
                <small className="text-muted">
                  <i className="icon icon-user position-left"></i> 12 mins ago
                </small>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip ascing elit
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      ;
    </div>
  );
};

export default NavBar;
