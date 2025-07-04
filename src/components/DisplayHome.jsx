import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./songItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item) => (
            <AlbumItem AlbumItemDetails={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item) => (
            <SongItem songItemDetails={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
