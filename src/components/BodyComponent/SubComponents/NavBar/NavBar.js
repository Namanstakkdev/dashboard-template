import { useState } from "react";
import MessageBox from "./MessageBox/MessageBox";
import NotificationBox from "./NotificationBox/NotificationBox";
import UserMenuBox from "./UserMenuBox/UserMenuBox";
import RightMenuBox from "./RightMenuBox/RightMenuBox";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [rightnavBar, setRightNavbar] = useState(false);

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
                <MessageBox />
                <NotificationBox />
                <SearchBar
                  toggleSearchBar={toggleSearchBar}
                  setToggleSearchBar={setToggleSearchBar}
                />
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
                <UserMenuBox />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <RightMenuBox rightnavBar={rightnavBar} setRightNavbar={setRightNavbar} />
    </div>
  );
};

export default NavBar;
