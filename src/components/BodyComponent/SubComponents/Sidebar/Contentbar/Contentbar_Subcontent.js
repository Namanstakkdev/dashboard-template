import { useEffect } from "react";
import data from "./ContentData";
import jsondata from "../../../../../config/menu_dom_structure.json";
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
          <i
            className={
              jsondata.menus[0].submenus[0].icons[0] +
              " " +
              jsondata.menus[0].submenus[0].icons[1]
            }
          ></i>
          <span>{jsondata.menus[0].submenus[0].title}</span>{" "}
          <i className=" icon-angle-left  pull-right"></i>
        </a>

        <ul className="treeview-menu">
          {/* <li>
            <ContentMenu_Subdata
              icon={jsondata.menu_1.menu_options}
              menu_data={jsondata.menu_1.menu_options}
            />
          </li> */}
          <li>
            <a href="panel-page-products.html">
              <i className="icon icon-circle-o"></i>All Products
            </a>
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
