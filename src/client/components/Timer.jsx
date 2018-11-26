import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";

export default ({ current, from, maxLength }) => {
  const percent = from ? 100 * (current / from) : 0;
  const currBlocks = current ? current.toString().split("") : "";
  const blocks = [
    ...Array.from({ length: maxLength - currBlocks.length }).map(nil => 0),
    ...currBlocks
  ];

  return (
    <div id="timer" className="field">
      <progress className="progress is-large" value={percent} max="100">
        {percent}%
      </progress>
      <div className="has-text-centered clock">
        <span className="icon">
          <FontAwesomeIcon icon={faHourglass} />
        </span>
        {blocks.map((block, idx) => (
          <b key={idx}>
            {block}
          </b>
        ))}
      </div>
    </div>
  );
};
