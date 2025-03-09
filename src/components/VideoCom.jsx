import { useRef } from "react";
import styles from "./VideoCom.module.css";

const VideoPlayer = ({ type = "video/mp4" }) => {
  return (
    <div className={styles.container}>
      <h2>Please Watch demo</h2>
      <video className={styles.video} controls muted autoPlay loop>
        <source src="./viedo.mp4" type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
