import React, { useEffect, useState } from "react";

export default ({ current, triggerTimer, listenActions }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(
    () => {
      listenActions();
    },
    [true]
  );

  return (
    <div>
      <p>Timer: {current}</p>
      <input
        type="number"
        value={seconds}
        onChange={({ target }) => setSeconds(target.value)}
      />
      <button onClick={() => triggerTimer(seconds)}> Trigger timer </button>
    </div>
  );
};
