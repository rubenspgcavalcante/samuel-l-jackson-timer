import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import classNames from "class-names";
import Timer from "./Timer";
import SLJTimeout from "./SLJTimeout";

export default ({ current, triggerTimer, listenActions }) => {
  const [seconds, setSeconds] = useState(60);
  const [submited, setSubmited] = useState(false);

  useEffect(
    () => {
      listenActions();
    },
    [true]
  );

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="box">
          {current ? <Timer current={current} maxLength={3} /> : <SLJTimeout />}
          <div className="field has-addons">
            <p className="control has-icons-left is-expanded">
              <input
                className="input"
                placeholder="seconds"
                type="number"
                maxLength={3}
                value={seconds}
                onChange={({ target }) => setSeconds(target.value)}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faClock} />
              </span>
            </p>
            <p className="control">
              <a
                className={classNames("button is-primary", {
                  disabled: submited
                })}
                onClick={() => {
                  if (!submited) {
                    triggerTimer(seconds);
                    setSubmited(true);
                  }
                }}
              >
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faBolt} color="yellow" />
                </span>
                <span>Countdown!</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
