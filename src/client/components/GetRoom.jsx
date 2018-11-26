import React from "react";
import { Link } from "react-router-dom";

export default () => {
  const randomId = Math.random()
    .toString(36)
    .substring(2);

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="box">
          <div className="field">
            <div className="control has-text-centered">
              <h1 className="title">Samuel L. Jackson Timer</h1>
              <Link className="button" to={`room/${randomId}`}>
                Go!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
