import React, { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

const SongItem = (props) => {
  const { songItemDetails } = props;
  const { image, name, desc, id } = songItemDetails;

  const { playWithId } = useContext(PlayerContext);

  const onClickSongItem = () => {
    playWithId(id);
  };

  return (
    <div
      onClick={onClickSongItem}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#fffffff26]">
      <img src={image} alt={name} className="rounded" />
      <p className="font-bold mb-1 mt-2">{name}</p>
      <p className="text-slate-200 text-sm mb-1">{desc}</p>
    </div>
  );
};

export default SongItem;
