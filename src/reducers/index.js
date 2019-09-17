import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Hello Buddy", duration: "5:15" },
    { title: "No Smoking", duration: "3:05" },
    { title: "No disturb", duration: "4:50" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
