import React, { useRef, useState, useEffect } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  const roomEl = useRef();
  const [notify, setNotify] = useState(false);

  let timeoutId = null;
  useEffect(
    () => {
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      if (notify) {
        timeoutId = setTimeout(() => {
          setNotify(false);
          timeoutId = null;
        }, 1000);
      }
    },
    [notify]
  );

  return (
    <div id="copy-room" className="field has-addons">
      <p className="control is-expanded">
        <input
          ref={roomEl}
          type="text"
          className="input"
          readOnly
          value={location.href}
        />
      </p>
      <div className="control">
        <a
          className="button"
          onClick={() => {
            roomEl.current.select();
            document.execCommand("copy");
            roomEl.current.blur();
            window.getSelection().removeAllRanges();
            setNotify(true);
          }}
        >
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon={faCopy} />
          </span>
          <span>Copy</span>
        </a>
        {notify ? (
        <div className="notification-wrapper">
          <div className="notification is-info">
            <button className="delete" onClick={() => setNotify(false)} />
            Link copied!
          </div>
        </div>
      ) : null}
      </div>
    </div>
  );
};
