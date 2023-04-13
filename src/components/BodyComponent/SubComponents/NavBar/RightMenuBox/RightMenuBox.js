const RightMenuBox = ({ rightnavBar, setRightNavbar }) => {
  return (
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
                Lorem ipsum dolor sit amet conse ctetur which ascing elit users.
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
                Lorem ipsum dolor sit amet consec tetur adip ascing elit users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightMenuBox;
