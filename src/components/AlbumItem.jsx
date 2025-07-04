import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = (props) => {
  const navigate = useNavigate();

  const { AlbumItemDetails } = props;

  const { image, name, desc, id } = AlbumItemDetails;

  const onClickAlbumItem = () => {
    navigate(`/album/${id}`);
  };

  return (
    <div
      onClick={onClickAlbumItem}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} alt={name} className="rounded" />
      <p className="font-bold mb-1 mt-2">{name}</p>
      <p className="text-slate-200 text-sm mb-1">{desc}</p>
    </div>
  );
};

export default AlbumItem;
