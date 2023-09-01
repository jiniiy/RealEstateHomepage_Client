import { useState, useRef } from "react";
import { SectionStyle, VideoButton } from "./style";

import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";

export function HomeMain01() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    setIsMuted((current) => !current);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <SectionStyle>
      <video ref={videoRef} muted={isMuted} width="100%" autoPlay loop>
        <source
          src={`${process.env.BACKEND_URL}/HomeAdvertising.mp4`}
          type="video/mp4"
        />
      </video>
      <VideoButton isMuted={isMuted} onClick={toggleSound}>
        {isMuted ? (
          <VolumeOffOutlinedIcon style={{ fontSize: 64 }} />
        ) : (
          <VolumeUpOutlinedIcon style={{ fontSize: 64 }} />
        )}
      </VideoButton>
    </SectionStyle>
  );
}
