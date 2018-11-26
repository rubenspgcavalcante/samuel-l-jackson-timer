import React, { useRef, useEffect } from "react";

import shutUp from "../assets/shut-the-f-up.mp3";
import face from "../assets/samuel-l-jackson-pulp-fiction.png";

export default () => {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
  }, [true])

  return (
    <>
      <audio autoPlay ref={audioRef}>
        <source  src={shutUp} type="audio/mpeg" />
      </audio>
      <img src={face} />
    </>
  );
};
