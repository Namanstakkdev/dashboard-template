import Contentbar_Subcontent from "./Contentbar_Subcontent";
import jsondata from "../../../../../config/menu_dom_structure.json";

const Contentbar = ({ tabcontent, activedash, handleDashClick }) => {
  return (
    <div>
      <div className="tab-content flex-grow-1" id="v-pills-tabContent">
        <div
          className={
            tabcontent === "v-pills-home"
              ? "tab-pane fade active show"
              : "tab-pane fade"
          }
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <div className="relative brand-wrapper sticky b-b">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="text-xs-center">
                <span className="font-weight-lighter s-18">
                  {jsondata.menus[0].title}
                </span>
              </div>
              <div className="badge badge-danger r-0">
                {jsondata.menus[0].panel}
              </div>
            </div>
          </div>
          <ul className="sidebar-menu">
            <Contentbar_Subcontent
              activedash={activedash}
              handleDashClick={handleDashClick}
            />
            {/* <li className="treeview">
              <a href="/">
                <i className="icon icon-account_box s-24"></i>Users
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-page-users.html">
                    <i className="icon icon-circle-o"></i>All Users
                  </a>
                </li>
                <li>
                  <a href="panel-page-users-create.html">
                    <i className="icon icon-add"></i>Add User
                  </a>
                </li>
                <li>
                  <a href="panel-page-profile.html">
                    <i className="icon icon-user"></i>User Profile{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="/">
                <i className="icon icon-package s-24"></i>
                <i className=" icon-angle-left  pull-right"></i>
                <span>Inbox</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-page-inbox.html">
                    <i className="icon icon-circle-o"></i>All Messages
                  </a>
                </li>
                <li>
                  <a href="panel7-inbox.html">
                    <i className="icon icon-circle-o"></i>Panel7 - Inbox
                  </a>
                </li>
                <li>
                  <a href="panel8-inbox.html">
                    <i className="icon icon-circle-o"></i>Panel8 - Inbox
                  </a>
                </li>
                <li>
                  <a href="panel-page-inbox-create.html">
                    <i className="icon icon-add"></i>Compose
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview ">
              <a href="/">
                <i className="icon icon-package  s-24"></i> <span>Apps</span>
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-page-chat.html">
                    <i className="icon icon-circle-o"></i>Chat
                  </a>
                </li>
                <li>
                  <a href="panel7-tasks.html">
                    <i className="icon icon-circle-o"></i>Tasks / Todo
                  </a>
                </li>
                <li>
                  <a href="panel-page-calendar.html">
                    <i className="icon icon-date_range"></i>Calender
                  </a>
                </li>
                <li>
                  <a href="panel-page-calendar2.html">
                    <i className="icon icon-date_range"></i>Calender 2
                  </a>
                </li>
                <li>
                  <a href="panel-page-contacts.html">
                    <i className="icon icon-circle-o"></i>Contacts
                  </a>
                </li>
                <li>
                  <a href="panel1-projects.html">
                    <i className="icon icon-circle-o"></i>Panel1 - Projects
                  </a>
                </li>
                <li>
                  <a href="panel7-projects-list.html">
                    <i className="icon icon-circle-o"></i>Panel7 - Projects List
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="/">
                <i className="icon icon-documents3 s-24"></i> <span>Pages</span>
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="/">
                    <i className="icon icon-documents3"></i>Blank Pages
                    <i className=" icon-angle-left  pull-right"></i>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="panel-page-blank.html">
                        <i className="icon icon-document"></i>Simple Blank
                      </a>
                    </li>
                    <li>
                      <a href="panel-page-blank-tabs.html">
                        <i className="icon icon-document"></i>Tabs Blank{" "}
                        <i className=" icon-angle-left  pull-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    <i className="icon icon-fingerprint text-green"></i>
                    Auth Pages
                    <i className=" icon-angle-left  pull-right"></i>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="login.html">
                        <i className="icon icon-document"></i>Login Page 1
                      </a>
                    </li>
                    <li>
                      <a href="login-2.html">
                        <i className="icon icon-document"></i>Login Page 2
                      </a>
                    </li>
                    <li>
                      <a href="login-3.html">
                        <i className="icon icon-document"></i>Login Page 3
                      </a>
                    </li>
                    <li>
                      <a href="login-4.html">
                        <i className="icon icon-document"></i>Login Page 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    <i className="icon icon-bug text-red"></i>Error Pages
                    <i className=" icon-angle-left  pull-right"></i>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="panel-page-404.html">
                        <i className="icon icon-document"></i>404 Page
                      </a>
                    </li>
                    <li>
                      <a href="panel-page-500.html">
                        <i className="icon icon-document"></i>500 Page
                        <i className=" icon-angle-left  pull-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="panel-page-error.html">
                        <i className="icon icon-document"></i>420 Page
                        <i className=" icon-angle-left  pull-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    <i className="icon icon-documents3"></i>Other Pages
                    <i className=" icon-angle-left  pull-right"></i>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="panel-page-invoice.html">
                        <i className="icon icon-document"></i>Invoice Page
                      </a>
                    </li>
                    <li>
                      <a href="panel-page-no-posts.html">
                        <i className="icon icon-document"></i>No Post Page
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="/">
                <i className="icon icon-goals-1  s-24"></i>{" "}
                <span>Elements</span>
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-element-widgets.html">
                    <i className="icon icon-widgets amber-text s-14"></i>{" "}
                    <span>Widgets</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-counters.html">
                    <i className="icon icon-filter_9_plus amber-text s-14"></i>{" "}
                    <span>Counters</span>
                  </a>
                </li>

                <li>
                  <a href="panel-element-buttons.html">
                    <i className="icon icon-touch_app amber-text s-14"></i>{" "}
                    <span>Buttons</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-typography.html">
                    <i className="icon icon-text-width amber-text s-14"></i>{" "}
                    <span>Typography</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-tabels.html">
                    <i className="icon icon-table amber-text s-14"></i>{" "}
                    <span>Tables</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-alerts.html">
                    <i className="icon icon-exclamation-circle amber-text s-14"></i>{" "}
                    <span>Alerts</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-slider.html">
                    <i className="icon icon-view_carousel amber-text s-14"></i>
                    <span>Slider</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-tabs.html">
                    <i className="icon icon-folders2 amber-text s-14"></i>
                    <span>Tabs</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-progress-bars.html">
                    <i className="icon icon-folders2 amber-text s-14"></i>
                    <span>Progress Bars</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-badges.html">
                    <i className="icon icon-flag7 amber-text s-14"></i>
                    <span>Badges</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-preloaders.html">
                    <i className="icon icon-data_usage amber-text s-14"></i>
                    <span>Preloaders</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview ">
              <a href="/">
                <i className="icon icon-wpforms  s-24 "></i>{" "}
                <span>Forms & Plugins</span>
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-element-forms.html">
                    <i className="icon icon-wpforms light-green-text"></i>
                    Bootstrap Inputs
                  </a>
                </li>
                <li>
                  <a href="form-jquery-validations.html">
                    <i className="icon icon-note-important light-green-text"></i>
                    Form Validation (Jquery)
                  </a>
                </li>
                <li>
                  <a href="form-bootstrap-validations.html">
                    <i className="icon icon-note-important light-green-text"></i>
                    Form Validation (Bootstrap)
                  </a>
                </li>
                <li>
                  <a href="panel-element-editor.html">
                    <i className="icon icon-pen2 light-green-text"></i>
                    Editor
                  </a>
                </li>
                <li>
                  <a href="panel-element-toast.html">
                    <i className="icon icon-notifications_active light-green-text"></i>
                    Toasts
                  </a>
                </li>
                <li>
                  <a href="panel-element-stepper.html">
                    <i className="icon icon-burst_mode light-green-text"></i>
                    Stepper
                  </a>
                </li>
                <li>
                  <a href="panel-element-date-time-picker.html">
                    <i className="icon icon-date_range light-green-text"></i>
                    Date Time Picker
                  </a>
                </li>
                <li>
                  <a href="panel-element-color-picker.html">
                    <i className="icon icon-adjust light-green-text"></i>
                    Color Picker
                  </a>
                </li>
                <li>
                  <a href="panel-element-range-slider.html">
                    <i className="icon icon-space_bar light-green-text"></i>
                    Range Slider
                  </a>
                </li>
                <li>
                  <a href="panel-element-select2.html">
                    <i className="icon  icon-one-finger-click light-green-text"></i>
                    Select 2
                  </a>
                </li>
                <li>
                  <a href="panel-element-tags.html">
                    <i className="icon  icon-tags3 light-green-text"></i>
                    Tags
                  </a>
                </li>
                <li>
                  <a href="panel-element-data-tables.html">
                    <i className="icon icon-table light-green-text"></i>
                    Data Tables
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="/">
                <i className="icon icon-bar-chart2  s-24"></i>
                <span>Charts</span>
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-element-charts-js.html">
                    <i className="icon icon-area-chart pink-text s-14"></i>
                    <span>Charts.Js</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-morris.html">
                    <i className="icon icon-bubble_chart pink-text s-14"></i>
                    Morris Charts
                  </a>
                </li>
                <li>
                  <a href="panel-element-echarts.html">
                    <i className="icon icon-bar-chart-o pink-text s-14"></i>
                    Echarts
                  </a>
                </li>
                <li>
                  <a href="panel-element-easy-pie-charts.html">
                    <i className="icon icon-area-chart pink-text s-14"></i>
                    Easy Pie Charts
                  </a>
                </li>
                <li>
                  <a href="panel-element-jqvmap.html">
                    <i className="icon icon-map pink-text s-14"></i>
                    Jqvmap
                  </a>
                </li>
                <li>
                  <a href="panel-element-sparklines.html">
                    <i className="icon icon-line-chart2 pink-text s-14"></i>
                    Sparklines
                  </a>
                </li>
                <li>
                  <a href="panel-element-float.html">
                    <i className="icon icon-pie-chart pink-text s-14"></i>
                    Float Charts
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="/">
                <i className="icon icon-dialpad  s-24"></i>
                <span>Extra</span>
                <i className=" icon-angle-left  pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="panel-element-letters.html">
                    <i className="icon icon-brightness_auto light-blue-text s-14"></i>
                    <span>Avatar Placeholders</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-icons.html">
                    <i className="icon icon-camera2 light-blue-text s-14"></i>{" "}
                    <span>Icons</span>
                  </a>
                </li>
                <li>
                  <a href="panel-element-colors.html">
                    <i className="icon icon-palette light-blue-text s-14"></i>{" "}
                    <span>Colors</span>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div
          className={
            tabcontent === "v-pills-profile"
              ? "tab-pane fade active show"
              : "tab-pane fade"
          }
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <div className="relative brand-wrapper sticky b-b p-3">
            <form>
              <div className="form-group input-group-sm has-right-icon">
                <input
                  className="form-control form-control-sm light r-30"
                  placeholder="Search"
                  type="text"
                />
                <i className="icon-search"></i>
              </div>
            </form>
          </div>
          <div className="sticky slimScroll">
            <div className="p-2">
              <ul className="list-unstyled">
                <li className="pt-3 pb-3 sticky p-3 b-b white">
                  <span className="badge r-3 badge-success">A</span>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u1.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u6.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u6.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="pt-3 pb-3 sticky p-3 b-b white">
                  <span className="badge r-3 badge-danger">B</span>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u2.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u3.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u4.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled">
                {/* <!-- Alphabet with number of contacts --> */}
                <li className="pt-3 pb-3 sticky p-3 b-b white">
                  <span className="badge r-3 badge-success gradient">C</span>
                </li>
                {/* <!-- Single contact --> */}
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u1.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u6.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u6.png")}
                          alt="User Name"
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-4">
                  <span className="badge r-3 badge-danger purple">D</span>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u2.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u3.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="my-1">
                  <div className="card no-b p-3">
                    <div className="">
                      <div className="image mr-3  float-left">
                        <img
                          className="w-40px"
                          src={require("../../../../../assets/img/dummy/u4.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <div>
                          <strong>Alexander Pierce</strong>
                        </div>
                        <small> alexander@paper.com</small>
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

export default Contentbar;
