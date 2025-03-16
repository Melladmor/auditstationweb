"use client";

import usePlayHook from "@/components/VideoPlayer/hooks/usePlayHook";
import useVolume from "@/components/VideoPlayer/hooks/useVolume";
import Controls from "./Controls/Controls";
import useNextBack from "./hooks/useNextBack";
import "./css/player.css";
type Props = {
  videoLink: string;
  customClass?: string;
};

const VideoPlayer = ({ videoLink, customClass }: Props) => {
  const {
    currentTime,
    duration,
    handlePlayPause,
    handleSeek,
    isPlaying,
    toggleFullScreen,
    videoRef,
    showMainPlay,
  } = usePlayHook();

  const {
    handleVolumeChange,
    isMuted,
    showVolumeControl,
    toggleMute,
    toggleVolumeControl,
    volume,
  } = useVolume(1, videoRef);

  const { handleBack, handleNext } = useNextBack(videoRef);
  return (
    <div className="relative video_h_w">
      <video
        ref={videoRef}
        className={`video_h_w  object-cover ${
          customClass ? customClass : "vedio_custom_class "
        }`}
        preload="none"
        controls={false}>
        <source src={videoLink} type="video/mp4" />
      </video>

      <Controls
        play_pause={{
          isPlaying: isPlaying,
          onClick: handlePlayPause,
          showMainPlay,
        }}
        fullScreen={toggleFullScreen}
        track={{
          currentTime,
          duration,
          handleSeek,
        }}
        volume={{
          handleVolumeChange,
          isMuted,
          showVolumeControl,
          toggleMute,
          toggleVolumeControl,
          volume,
        }}
        next_back={{
          handleBack,
          handleNext,
        }}
      />
    </div>
  );
};

export default VideoPlayer;
