import React from "react";

const PaymentStatus = () => {
  return (
    <div className="container-fluid col-content">
      <div className="row">
        <div className="col-sm-7">
          <div className="mx-3 col-content-1">
            <div className="request-py1">
              <h5 className="day-py">Today</h5>
              <div className="row">
                <div className="col-sm-4">
                  <p className="num-py">2</p>
                  <p className="req-py">Payments Requests</p>
                </div>
                <div className="col-sm-4">
                  <p className="num-py">6</p>
                  <p className="req-py">Payments Pending</p>
                </div>
                <div className="col-sm-4">
                  <p className="num-py">23</p>
                  <p className="req-py">Payments Credited</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-3 mt-3 col-content-1">
            <div className="graph-py">
              <div className="line-graph mx-4">
                <h4 className="graph-head mt-2">Actual vs Estimated Revenue</h4>
                <div className="circle-ind"></div>
                <span className="mx-2 year-h">Actual</span>
                <div className="circle-ind-1"></div>
                <span className="mx-2 year-h">Estimated</span>
                {/* <div id="chart-container">
                                <canvas id="line-chart" width="800" height="400"></canvas>
                                <h6 className="text-center">year</h6>
                                <button id="prev-year">Previous Year</button>
                                <span id="current-year">2020</span>
                                <button id="next-year">Next Year</button>
                                <canvas id="line-chart"></canvas>
                            </div>  */}
                <div
                  id="chart-container"
                  className="chart-container"
                  style={{ width: "700px", height: "400px" }}
                >
                  <canvas id="line-chart" width="740" height="350"></canvas>
                  <h6 className="year-h mt-1">Year</h6>
                  <span className="drop-year">
                    <i
                      id="prev-year"
                      className="fas fa-arrow-left arrow-icon year-arrow mx-2"
                    ></i>
                    <span id="current-year" className="year">
                      2020
                    </span>
                    <i
                      id="next-year"
                      className="fas fa-arrow-right arrow-icon year-arrow mx-2"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 gx-0 avg-m-r">
                  <h6 className="revenue-income">Average Monthly Revenue</h6>
                  <p className="rate-mon">$ 6000</p>
                </div>
                <div className="col-sm-4 gx-0 avg-m-r">
                  <h6 className="revenue-income">Average Daily Income</h6>
                  <p className="rate-mon">$ 450</p>
                </div>
                <div className="col-sm-4 gx-0 avg-m-r">
                  <h6 className="revenue-income">Best Month</h6>
                  <p className="rate-mon">August</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-5 payment-status">
          {/* <!-- <h5 className="head-all mt-4">Personal Details</h5> --> */}
          <h4 className="mt-3 mx-3 recent-py">Recent Payment Statuses</h4>
          <div className="image-container overflow-hidden">
            <div className="content-scroll overflow-auto">
              {/* <!-- <button type="button" className="btn btn-view mt-2 mx-3">Patient View</button> --> */}
              <div className="py-block mx-3 mt-1">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn pending-btn">
                  Pending
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn pending-btn">
                  Pending
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
              <div className="py-block mt-3 mx-3">
                <span className="mx-3 py-name">John Wickens</span>
                <button type="button" className="btn paid-btn">
                  paid
                </button>
                <p className="mx-3 com-py">Payment completed on 24/5/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
