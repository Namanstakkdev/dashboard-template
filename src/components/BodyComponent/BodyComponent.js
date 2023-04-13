import { useState } from "react";
import Sidebar from "./SubComponents/Sidebar/Sidebar";
import PushMenu from "./SubComponents/Pushmenu/Pushmenu";
import NavBar from "./SubComponents/NavBar/NavBar";

const BodyComponent = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <div
      className={
        navbar
          ? "light sidebar-mini sidebar-collapsex sidebar-expanded-on-hoverx loaded sidebar-expanded-on-hover"
          : "light sidebar-mini sidebar-collapsex sidebar-expanded-on-hoverx loaded sidebar-expanded-on-hover sidebar-collapse"
      }
    >
      <Sidebar navbar={navbar} />
      <PushMenu navbar={navbar} setNavbar={setNavbar} />
      <NavBar />
    </div>
  );
};
export default BodyComponent;
