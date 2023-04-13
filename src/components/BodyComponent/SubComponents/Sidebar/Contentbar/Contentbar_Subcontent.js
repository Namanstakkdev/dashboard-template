import { useEffect } from "react";
import data from "./ContentData";
import jsondata from "./MenuContent.json";
import ContentMenu_Subdata from "./ContentMenu_Subdata/ContentMenu_Subdata";

const Contentbar_Subcontent = ({ activedash, handleDashClick }) => {
  const icon = "icon icon-sailing-boat-water s-24";

  return (
    <>
      <li
        className={
          activedash === "treeview active" ? "treeview active" : "treeview"
        }
        onClick={() => {
          activedash === "treeview active"
            ? handleDashClick("treeview")
            : handleDashClick("treeview active");
        }}
      >
        <a>
          <i className={jsondata.menu_1.menu_icon}></i>
          <span>{jsondata.menu_1.menu_title}</span>{" "}
          <i className=" icon-angle-left  pull-right"></i>
        </a>

        <ul className="treeview-menu">
          <li>
            <ContentMenu_Subdata
              icon={jsondata.menu_1.menu_options}
              menu_data={jsondata.menu_1.menu_options}
            />
          </li>
        </ul>
      </li>

      {/* <li className="treeview">
        <a href="/">
          <i className="icon icon icon-package s-24"></i>
          <span>Products</span>
          <span className="badge r-3 badge-primary pull-right">4</span>
        </a>
        <ul className="treeview-menu">
          <li>
            <a href="panel-page-products.html">
              <i className="icon icon-circle-o"></i>All Products
            </a>
          </li>
          <li>
            <a href="panel-page-products-create.html">
              <i className="icon icon-add"></i>Add New{" "}
            </a>
          </li>
        </ul>
      </li> */}
    </>
  );
};

export default Contentbar_Subcontent;
