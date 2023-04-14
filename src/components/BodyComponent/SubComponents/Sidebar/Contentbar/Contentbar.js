import Contentbar_Subcontent from "./Contentbar_Subcontent";
import jsondata from "../../../../../config/menu_dom_structure.json";

const Contentbar = ({ tabcontent }) => {
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
            <Contentbar_Subcontent />
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
