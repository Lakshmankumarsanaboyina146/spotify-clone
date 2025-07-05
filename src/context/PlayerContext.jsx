import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { songsData } from "../assets/assets";
import { PlayerContext } from "./player-context";

// export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let timeoutId;

    const updateTime = () => {
      if (!audio.duration) return; // Avoid division by zero

      // Update seek bar
      seekBar.current.style.width = `${
        (audio.currentTime / audio.duration) * 100
      }%`;

      // Update time state
      let updateSecondCurrentTime = Math.floor(audio.currentTime % 60);
      let updateMinuteCurrentTime = Math.floor(audio.currentTime / 60);

      setTime({
        currentTime: {
          second:
            updateSecondCurrentTime < 10
              ? `0${updateSecondCurrentTime}`
              : updateSecondCurrentTime,
          minute:
            updateMinuteCurrentTime < 10
              ? `0${updateMinuteCurrentTime}`
              : updateMinuteCurrentTime,
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        },
      });
    };

    // Set up the event handler
    timeoutId = setTimeout(() => {
      audio.ontimeupdate = updateTime;
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      audio.ontimeupdate = null;
    };
  }, [audioRef]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
