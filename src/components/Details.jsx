import "./Details.css";
const Details = () => {
  return (
    <>
      <div>
        <div class="md-stepper-horizontal orange">
          <div class="md-step active done">
            <div class="md-step-circle">
              <span>1</span>
            </div>
            <div class="md-step-title">Consignment Booked</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step active editable">
            <div class="md-step-circle">
              <span>2</span>
            </div>
            <div class="md-step-title">Picked up</div>
            <div class="md-step-optional">Optional</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step active">
            <div class="md-step-circle">
              <span>3</span>
            </div>
            <div class="md-step-title">Branch out carting</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle">
              <span>4</span>
            </div>
            <div class="md-step-title">Delivered successfully</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
        </div>
      </div>

      {/* Button start*/}

      <div className="Button d-flex justify-content-center mt-5">
        <button
          className="btn_new h3"
          style={{
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          Docket Number L123456789
        </button>
      </div>
      {/* Button end */}

      {/* section */}
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h5 className="sub_para_1">Consignor</h5>
              <h4>RAW PRESSERY Private LIMITED</h4>
              <span>
                <p className="sub_para">
                  Y-36, OKHLA INDUSTRIAL AREA PHASE-II, OKHLA, New Delhi, South
                  East Delhi, Delhi, 110020
                </p>
              </span>
            </div>
            <div className="col">
              <h5 className="sub_para_1">Consignee</h5>
              <h4>Balarema Agencies</h4>
              <span>
                <p className="sub_para">
                  Vallikkad, Muttungal, Vadakara nIV -436 G, IV-336 H.OMEGA
                  Building nKozhikode,.,673104
                </p>
              </span>
            </div>
            <div className="col">
              <h5 className="sub_para_1">Shipment Booked Date</h5>
              <span>
                <p className="sub_para">2023-09-01T14:55:05.000Z</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="container-fluid">
        <div class="row d-flex justify-content-center mt-5">
          <div class="col-md-4 m-0">
            <div class="card">
              <div class="card-body">
                <div class="card-header d-flex justify-content-center border-bottom-0 h5 font-weight-bold">
                  Date/Time
                </div>
                <p class="card-text d-flex justify-content-center">
                  2023-09-09T19:24:01.000Z{" "}
                </p>
                <p class="card-text d-flex justify-content-center">
                  2023-09-09T19:57:01.000Z{" "}
                </p>
                <p class="card-text d-flex justify-content-center">
                  2023-09-09T18:24:01.000Z{" "}
                </p>
                <p class="card-text d-flex justify-content-center">
                  2023-09-09T14:55:01.000Z{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-2 m-0">
            <div class="card">
              <div class="card-body">
                <div class="card-header d-flex justify-content-center border-bottom-0 h5 font-weight-bold">
                  Location
                </div>
                <p class="card-text  d-flex justify-content-center">BLR </p>
                <p class="card-text  d-flex justify-content-center">BLR </p>
                <p class="card-text  d-flex justify-content-center">BLR </p>
                <p class="card-text  d-flex justify-content-center">BLR </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-0">
            <div class="card">
              <div class="card-body">
                <div class="card-header  d-flex justify-content-center border-bottom-0 h5 font-weight-bold">
                  Status
                </div>
                <p class="card-text  d-flex justify-content-center">
                  Delivered Successfully{" "}
                </p>
                <p class="card-text  d-flex justify-content-center">
                  Branch Out carting{" "}
                </p>
                <p class="card-text  d-flex justify-content-center">
                  Picked up{" "}
                </p>
                <p class="card-text  d-flex justify-content-center">
                  Consignment Booked{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Button d-flex justify-content-center m-5">
        <button className="btn_new" style={{ padding: "1%" }}>
          Download POD
        </button>
      </div>
    </>
  );
};

export default Details;
