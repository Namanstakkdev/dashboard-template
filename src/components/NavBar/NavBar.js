const NavBar = () => {
  return (
    <div>
      <div className="has-sidebar-left has-sidebar-tabs">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
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
                <li className="dropdown custom-dropdown messages-menu">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    <i className="icon-message "></i>
                    <span className="badge badge-success badge-mini rounded-circle">
                      4
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
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
                <li className="dropdown custom-dropdown notifications-menu">
                  <a
                    href="#"
                    className=" nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon-notifications "></i>
                    <span className="badge badge-danger badge-mini rounded-circle">
                      4
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
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
                    className="nav-link "
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className=" icon-search3 "></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link ml-2" data-toggle="control-sidebar">
                    <i className="icon-tasks "></i>
                  </a>
                </li>
                <li className="dropdown custom-dropdown user user-menu ">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    <img
                      src={require("../../assets/img/dummy/u8.png")}
                      className="user-image"
                      alt="User Image"
                    />
                    <i className="icon-more_vert "></i>
                  </a>
                  <div className="dropdown-menu p-4 dropdown-menu-right">
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
    </div>
  );
};

export default NavBar;
