import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import Timer from "./Timer";
import CopyRoom from "./CopyRoom";
import SLJTimeout from "./SLJTimeout";

export default ({ current, shutUp, triggerTimer, listenActions }) => {
  const [seconds, setSeconds] = useState(60);
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    if(startedAt === 0 && current) {
      setStartedAt(current);
    }
  }, [current])

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
          {current === 0 && shutUp ? (
            <SLJTimeout />
          ) : (
            <Timer from={startedAt} current={current} maxLength={3} />
          )}
          <CopyRoom />
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
                className={"button is-primary"}
                onClick={() => triggerTimer(seconds)}
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
