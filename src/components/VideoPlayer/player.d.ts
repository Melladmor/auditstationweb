import { useNextBackReturn } from "@/hooks/hook";

export interface PlayPauseI {
  onClick: () => void;
  isPlaying: boolean;
  showMainPlay?: boolean;
}
export interface TrackI {
  currentTime: number;
  duration: number;
  handleSeek: (newTime: number) => void;
}
export type VolumeI = UseVolumeReturn;
export interface NextBackI {
  play_pause: PlayPauseI;
  next_back: useNextBackReturn;
}
export interface ControlsI {
  play_pause: PlayPauseI;
  fullScreen: () => void;
  track: TrackI;
  volume: VolumeI;
  next_back: useNextBackReturn;
}

export interface MoadlI {
  show: boolean;
  handleShowModal?: () => void;
}
