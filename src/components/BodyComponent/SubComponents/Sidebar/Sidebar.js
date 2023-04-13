import { useState } from "react";
import menuitem from "../../../../config/menuitem";
import Sidebar_Menu from "./Sidebar-Menu/Sidebar-Menu";
import Contentbar from "./Contentbar/Contentbar";

function Sidebar({ navbar }) {
  const [activenav, setActiveNav] = useState("v-pills-home-tab");
  const [tabcontent, setTabContent] = useState("v-pills-home");
  const [activedash, setActivedash] = useState("");

  const handleClick = (navdata, tabdata) => {
    setActiveNav(navdata);
    setTabContent(tabdata);
  };

  const handleDashClick = (data) => {
    setActivedash(data);
  };

  return (
    <>
      <aside
        className="main-sidebar fixed offcanvas b-r sidebar-tabs"
        data-toggle="offcanvas"
      >
        <div className="sidebar">
          <div className="d-flex hv-100 align-items-stretch">
            <div className="indigo text-white">
              <div
                className="nav mt-5 pt-5 flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <Sidebar_Menu
                  menuitem={menuitem}
                  activenav={activenav}
                  handleClick={handleClick}
                />
                <a href="/">
                  <figure className="avatar">
                    <img
                      src={require("../../../../assets/img/dummy/u6.png")}
                      alt=""
                    />
                    <span className="avatar-badge online"></span>
                  </figure>
                </a>
              </div>
            </div>
            {navbar ? (
              <Contentbar
                tabcontent={tabcontent}
                activedash={activedash}
                handleDashClick={handleDashClick}
              />
            ) : null}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
