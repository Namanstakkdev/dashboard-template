import jsondata from "../../../../../config/menu_dom_structure.json";
import ContentMenu_Subdata from "./ContentMenu_Subdata/ContentMenu_Subdata";
import ContentMenu_heading from "./ContentMenu_heading/ContentMenu_heading";
import { useState } from "react";

const Contentbar_Subcontent = () => {
  const [activelink, setActivelink] = useState();
  function toggleActiveLinkClass(serial_id) {
    console.log(serial_id);
    if (serial_id === activelink) {
      setActivelink(null);
    } else {
      setActivelink(serial_id);
    }
  }

  function checkActiveLinkClass(serial_id) {
    if (serial_id === activelink) {
      return "treeview active";
    } else {
      return "treeview";
    }
  }

  return (
    <>
      {jsondata.menus.map((data, serial_id) => {
        return (
          <li
            className={checkActiveLinkClass(serial_id)}
            onClick={() => {
              toggleActiveLinkClass(serial_id);
            }}
          >
            <ContentMenu_heading
              icon={data.submenus[0].icons[0] + " " + data.submenus[0].icons[1]}
              title={data.submenus[0].title}
            />

            <ul className="treeview-menu">
              {/* {data.submenus.map((submenu_data, index) => {
                submenu_data.submenus.map((data2) => {
                  return (
                    <ContentMenu_Subdata
                      key={index}
                      icon={data2.icons[0] + " " + data2.icons[1]}
                      title={data2.title}
                    />
                  );
                });
              })} */}
              {jsondata.menus[serial_id].submenus.map((data) => {
                data.submenus.map((data, index) => {
                  <ContentMenu_Subdata
                    key={index}
                    icon={data.icons[0] + " " + data.icons[1]}
                    title={data.title}
                  />;
                });
              })}
              <li>
                <a href="panel-page-products.html">
                  <i class="icon icon-circle-o"></i>All Products
                </a>
              </li>
              <li>
                <a href="panel-page-products-create.html">
                  <i class="icon icon-add"></i>Add New{" "}
                </a>
              </li>
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default Contentbar_Subcontent;
