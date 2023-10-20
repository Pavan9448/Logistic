import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <>
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="table-info" scope="col">
                Docket Number
              </th>
              <th className="table-info" scope="col">
                From
              </th>
              <th className="table-info" scope="col">
                To
              </th>
              <th className="table-info" scope="col">
                Status
              </th>
              <th className="table-info" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">L123456789</th>
              <td>BLR</td>
              <td>KER</td>
              <td>
                <span className="badge bg-secondary">Consignment</span>
              </td>
              <td>
                <Link to="/details">Icon</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">L123456789</th>
              <td>BLR</td>
              <td>KER</td>
              <td>
                <span className="badge bg-secondary">Consignment</span>
              </td>

              <td>
                <Link to="/details">Icon</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">L123456789</th>
              <td>BLR</td>
              <td>KER</td>
              <td>
                <span className="badge bg-danger">Consignment</span>
              </td>
              <td>
                <Link to="/details">Icon</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">L123456789</th>
              <td>BLR</td>
              <td>KER</td>
              <td>
                <span className="badge bg-primary">Consignment</span>
              </td>
              <td>
                <Link to="/details">Icon</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">L123456789</th>
              <td>BLR</td>
              <td>KER</td>
              <td>
                <span className="badge bg-success">Consignment</span>
              </td>
              <td>
                <Link to="/details">Icon</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
