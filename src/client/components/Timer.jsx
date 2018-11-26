import React from "react";

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
      <div className="columns">
        {blocks.map((block, idx) => (
          <div key={idx} className="column">
            <b className="box has-background-dark has-text-white">{block}</b>
          </div>
        ))}
      </div>
    </div>
  );
};
