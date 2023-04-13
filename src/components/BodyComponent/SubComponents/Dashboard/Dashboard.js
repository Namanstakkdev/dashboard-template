const Dashboard = () => {
  return (
    <div className="container-fluid relative animatedParent animateOnce my-3">
      <div className="card no-b my-3">
        <div className="card-body">
          <div className="my-2" style={{ height: "200px" }}>
            <canvas
              data-chart="bar"
              data-dataset="[
                                  [21, 90, 55, 0, 59, 77, 12,21, 90, 55, 0, 59, 77, 12,21, 90, 55, 0, 59, 77, 12],
                                  [12, 40, 16, 17, 89, 0, 12,12, 0, 55, 60, 79, 99, 12,12, 0, 55, 60, 79, 99, 12],
                                  [12, 40, 16, 17, 89, 0,12, 40, 16, 17, 89, 0, 12,12, 40, 16, 17, 89, 0, 12],
                                  ]"
              data-labels="['Blue','Yellow','Green','Purple','Orange','Red','Indigo','Blue','Yellow','Green','Purple','Orange','Red','Indigo','Blue','Yellow','Green','Purple','Orange','Red','Indigo']"
              data-dataset-options="[
                              {
                                  label: 'HTML',
                                  backgroundColor: '#7986cb',
                                  borderWidth: 0,

                              },
                              {
                                   label: 'Wordpress',
                                   backgroundColor: '#88e2ff',
                                   borderWidth: 0,

                               },
                              {
                                    label: 'Laravel',
                                    backgroundColor: '#e2e8f0',
                                    borderWidth: 0,

                                }
                              ]"
              data-options="{
                                legend: { display: true,},
                                scales: {
                                  xAxes: [{
                                      stacked: true,
                                       barThickness:5,
                                       gridLines: {
                                          zeroLineColor: 'rgba(255,255,255,0.1)',
                                           color: 'rgba(255,255,255,0.1)',
                                           display: false,},
                                       }],
                                  yAxes: [{
                                          stacked: true,
                                               gridLines: {
                                                  zeroLineColor: 'rgba(255,255,255,0.1)',
                                                  color: 'rgba(255,255,255,0.1)',
                                              }
                                 }]

                                }
                          }"
            ></canvas>
          </div>
        </div>
        <div className="card-body">
          <div className="row my-3 no-gutters">
            <div className="col-md-3">
              <h1>Tasks</h1>
              Currently assigned tasks to team.
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-3">
                      <h6>New Layout</h6>
                      <small>75% Completed</small>
                    </div>
                    <figure className="avatar">
                      <img
                        src={require("../../assets/img/dummy/u12.png")}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="progress progress-xs mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-3">
                      <h6>New Layout</h6>
                      <small>75% Completed</small>
                    </div>
                    <figure className="avatar">
                      <img
                        src={require("../../assets/img/dummy/u2.png")}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="progress progress-xs mb-3">
                    <div
                      className="progress-bar bg-indigo"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-3">
                      <h6>New Layout</h6>
                      <small>75% Completed</small>
                    </div>
                    <div className="avatar-group">
                      <figure className="avatar">
                        <img
                          src={require("../../assets/img/dummy/u4.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="avatar">
                        <img
                          ssrc={require("../../assets/img/dummy/u11.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="avatar">
                        <img
                          src={require("../../assets/img/dummy/u1.png")}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="progress progress-xs mb-3">
                    <div
                      className="progress-bar yellow"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-3">
                      <h6>New Layout</h6>
                      <small>75% Completed</small>
                    </div>
                    <figure className="avatar">
                      <img
                        src={require("../../assets/img/dummy/u5.png")}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="progress progress-xs mb-3">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-eq-height my-3 mt-3">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3 bg-danger text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-package s-18"></i>
                    </div>
                    <div>
                      <span className="text-success">40+35</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">
                      <i className="icon-chrome"></i>
                    </div>
                    Chrome
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-timer s-18"></i>
                    </div>
                    <div>
                      <span className="badge badge-pill badge-primary">
                        4:30
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">68</div>
                    New Orders
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-user-circle-o s-18"></i>
                    </div>
                    <div>
                      <span className="badge badge-pill badge-danger">
                        4:30
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">170</div>
                    New Users
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-user-times s-18"></i>
                    </div>
                    <div>
                      <span className="text-danger">50</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">95</div>
                    Returning Users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card no-b p-2">
            <div className="card-body">
              <div className="card-body">
                <div style={{ height: "300px" }}>
                  <canvas
                    data-chart="chartJs"
                    data-chart-type="doughnut"
                    data-dataset="[
                                                  [75, 25,25],

                                              ]"
                    data-labels="[['Disk'],['Database'],['Disk2'],['Database2']]"
                    data-dataset-options="[
                                              {
                                                  label: 'Disk',
                                                  backgroundColor: [
                                                      '#03a9f4',
                                                      '#8f5caf',
                                                      '#3f51b5'
                                                  ],

                                              },


                                              ]"
                    data-options="{legend: {display: !0,position: 'bottom',labels: {fontColor: '#7F8FA4',usePointStyle: !0}},
                          }"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-package s-18"></i>
                    </div>
                    <div>
                      <span className="text-success">40+35</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">35</div>
                    New Products
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-user-times s-18"></i>
                    </div>
                    <div>
                      <span className="text-danger">50</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">95</div>
                    Returning Users
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-timer s-18"></i>
                    </div>
                    <div>
                      <span className="badge badge-pill badge-primary">
                        4:30
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">68</div>
                    New Orders
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="card no-b mb-3 indigo text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="icon-user-circle-o s-18"></i>
                    </div>
                    <div>
                      <span className="badge badge-pill badge-danger">
                        4:30
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="s-48 my-3 font-weight-lighter">170</div>
                    New Users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-deck my-3">
        <div className="card b-0">
          <div className="card-body p-5">
            <canvas id="gradientChart" width="600" height="400"></canvas>
          </div>
        </div>
        <div className="card no-b">
          <div className="card-body">
            <table className="table table-hover earning-box">
              <tbody>
                <tr className="no-b">
                  <td className="w-10">
                    <a
                      href="panel-page-profile.html"
                      className="avatar avatar-lg"
                    >
                      <img
                        src={require("../../assets/img/dummy/u6.png")}
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <h6>Sara Kamzoon</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </td>
                  <td>25</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <a
                      href="panel-page-profile.html"
                      className="avatar avatar-lg"
                    >
                      <img
                        src={require("../../assets/img/dummy/u7.png")}
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <h6>Sara Kamzoon</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </td>
                  <td>25</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <a
                      href="panel-page-profile.html"
                      className="avatar avatar-lg"
                    >
                      <img
                        src={require("../../assets/img/dummy/u9.png")}
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <h6>Sara Kamzoon</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </td>
                  <td>25</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <a
                      href="panel-page-profile.html"
                      className="avatar avatar-lg"
                    >
                      <img
                        src={require("../../assets/img/dummy/u11.png")}
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <h6>Sara Kamzoon</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </td>
                  <td>25</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <a
                      href="panel-page-profile.html"
                      className="avatar avatar-lg"
                    >
                      <img
                        src={require("../../assets/img/dummy/u12.png")}
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <h6>Sara Kamzoon</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </td>
                  <td>25</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <a
                      href="panel-page-profile.html"
                      className="avatar avatar-lg"
                    >
                      <img
                        src={require("../../assets/img/dummy/u5.png")}
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <h6>Sara Kamzoon</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </td>
                  <td>25</td>
                  <td>$250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
